import { redirect } from "@remix-run/node";
import { Link, Outlet, useLoaderData } from "@remix-run/react";
import StarsAndWishesList from "../../components/starsandwishes/StarsAndWishesList";
import Pagination from "../../components/util/Pagination";
import { requireUserSession } from "../../data/auth.sever";
import { prisma } from "../../data/database.server";
const PER_PAGE = 1;
export async function loader({ request }) {
	const user = await requireUserSession(request);
	const isDM = user.isDM;
	if (isDM) {
		throw redirect("/admin?page=1");
	}
	const countOptions = {};
	const url = new URL(request.url);
	const query = url.searchParams;

	const currentPage = Math.max(Number(query.get("page") || 1), 1);

	const options = {
		take: PER_PAGE,
		skip: (currentPage - 1) * PER_PAGE,
		orderBy: {
			dateAdded: "desc",
		},
	};

	options.where = {
		userId: user.userId,
	};
	countOptions.where = options.where;

	const [answers, count] = await Promise.all([
		prisma.answer.findMany(options),

		prisma.answer.count(countOptions),
	]);
	return { data: answers, count: count, currentPage: currentPage, user: user };
}

export default function StarsAndWishesLayout() {
	const { data: answers, count, currentPage, user } = useLoaderData();
	const totalPages = Math.ceil(count / PER_PAGE);

	const hasAnswers = answers && answers.length > 0;
	return (
		<>
			<section id="answerAdd">
				<div className="flex flex-col items-center justify-center mx-auto mt-12 max-w-xl">
					<Link
						to="add"
						state={currentPage}
						className="flex items-center mt-10 p-2 px-8 text-white bg-amber-600 rounded-lg hover:bg-amber-400  duration-200 focus:outline-none">
						<span className="mx-2">Add +</span>
					</Link>
				</div>
			</section>
			{hasAnswers && (
				<section
					id="answerList"
					className="flex flex-col">
					<StarsAndWishesList
						answers={answers}
						currentPage={currentPage}
						user={user}
					/>
					<div className="container mx-auto max-w-7xl p-2 md:px-12 px-6">
						<div
							aria-live="polite"
							className="text-gray-200 text-sm tracking-wider md:ml-1">
							<p>
								Displaying {answers.length} of {count} total item(s).
							</p>
						</div>
						{totalPages > 1 && (
							<Pagination
								totalPages={totalPages}
								pageParam="page"
								className="mt-8"
							/>
						)}
					</div>
				</section>
			)}
			{!hasAnswers && (
				<section>
					<div className="flex  mt-2 items-center justify-center mx-auto text-center">
						<p className="text-xl text-white">
							You have no submitted answers! Did a goblin steal them?
						</p>
					</div>
				</section>
			)}
			<Outlet />
		</>
	);
}
