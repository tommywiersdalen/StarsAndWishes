import AuthForm from "../../components/auth/AuthForm";
import {
	validateLoginCredentials,
	validateSignupCredentials,
} from "../../data/validation.server";
import { login, signup } from "../../data/auth.sever";

export default function auth() {
	return <AuthForm></AuthForm>;
}

export async function action({ request }) {
	const searchParams = new URL(request.url).searchParams;
	const authMode = searchParams.get("mode") || "login";
	const formData = await request.formData();
	const credentials = Object.fromEntries(formData);

	try {
		if (authMode === "login") {
			validateLoginCredentials(credentials);
		} else {
			validateSignupCredentials(credentials);
		}
	} catch (error) {
		return error;
	}

	try {
		if (authMode === "login") {
			return await login(credentials);
		} else {
			return await signup(credentials);
		}
	} catch (error) {
		if (error.status === 422 || error.status === 401) {
			return { credentials: error.message };
		}
	}
}

export function headers({ parentHeaders }) {
	return {
		"Cache-Control": parentHeaders.get("Cache-Control"),
	};
}
