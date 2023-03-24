import { createCookieSessionStorage, redirect } from "@remix-run/node";
import { hash, compare } from "bcryptjs";
import { prisma } from "./database.server";

const SESSION_SECRET = process.env.SESSION_SECRET;

const sessionStorage = createCookieSessionStorage({
    cookie: {
        secure: process.env.NODE_ENV === 'production',
        secrets: [SESSION_SECRET],
        sameSite: 'lax',
        maxAge: 30 * 24 * 60 * 60, //30 days
        httpOnly: true

    }
});

async function createUserSession(userId, userName, redirectPath) {
    ;
    const session = await sessionStorage.getSession()
    session.set('userId', userId);
    session.set('userName', userName)
    return redirect(redirectPath, {
        headers: {
            'Set-Cookie': await sessionStorage.commitSession(session),
        },
    });
}

export async function getUserFromSession(request) {
    const session = await sessionStorage.getSession(request.headers.get('Cookie'));
    const userId = session.get('userId');
    const userName = session.get('userName')

    if (!userId) {
        return null;
    }
    return userId;
}

export async function destroyUserSession(request) {
    const session = await sessionStorage.getSession(request.headers.get('Cookie'));

    return redirect('/', {
        headers: {
            'Set-Cookie': await sessionStorage.destroySession(session)
        }
    })
}

export async function requireUserSession(request) {
    const userId = await getUserFromSession(request);
    if (!userId) {
        throw redirect('/auth?mode=login');
    }
    return userId;
}


export async function signup({ userName, email, password }) {
    const existingUser = await prisma.user.findFirst({ where: { email } })
    if (existingUser) {
        const error = new Error('A user with the provided email adress exists already');
        error.status = 422;
        throw error;
    }
    const hashedpassword = await hash(password, 12);
    const user = await prisma.user.create({ data: { userName, email, password: hashedpassword } });
    return createUserSession(user.id, user.userName, '/starsandwishes');
}

export async function login({ email, password }) {
    const existingUser = await prisma.user.findFirst({ where: { email } })
    if (!existingUser) {
        const error = new Error('Could not log you in, please check your credentials');
        error.status = 401;
        throw error;
    }
    const passwordCorrect = await compare(password, existingUser.password);
    if (!passwordCorrect) {
        const error = new Error('Could not log you in, please check your credentials');
        error.status = 401;
        throw error;
    }
    return createUserSession(existingUser.id, existingUser.userName, '/starsandwishes');

}