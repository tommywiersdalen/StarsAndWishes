import { Link, Outlet, useLoaderData, useSearchParams } from "@remix-run/react";
import StarsAndWishesList from "../../components/starsandwishes/StarsAndWishesList";
import Pagination from "../../components/util/Pagination";
import { requireUserSession } from "../../data/auth.sever";
import { prisma } from "../../data/database.server";
const PER_PAGE = 6;
export async function loader({ request }) {
	const userId = await requireUserSession(request);
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
		userId,
	};
	countOptions.where = options.where;

	//const answers = await getAnswersByUserId(userId);
	//console.log(answers);
	const [answers, count] = await Promise.all([
		// SELECT * FROM "Pet" WHERE name LIKE '%?%' ORDER BY column ASC|DESC LIMIT 12 OFFSET 1
		prisma.answer.findMany(options),
		// SELECT COUNT(id) FROM "Pet"
		prisma.answer.count(countOptions),
	]);
	return { data: answers, count: count, currentPage: currentPage };
}

export default function StarsAndWishesLayout() {
	const { data: answers, count, currentPage } = useLoaderData();

	const totalPages = Math.ceil(count / PER_PAGE);
	console.log(currentPage);
	const hasAnswers = answers && answers.length > 0;
	return (
		<>
			<Outlet />
			<section id="answerAdd">
				<div className="flex flex-col items-center justify-center mx-auto mt-12 max-w-xl">
					<Link
						to="add"
						className="flex items-center mt-10 p-2 px-8 text-white bg-cyan-800 rounded-lg hover:bg-cyan-500 duration-200 focus:outline-none">
						<span className="mx-2">Add +</span>
					</Link>
				</div>
			</section>
			<section id="answerList">
				<StarsAndWishesList
					answers={answers}
					currentPage={currentPage}
				/>
				{totalPages > 1 && (
					<Pagination
						totalPages={totalPages}
						pageParam="page"
						className="mt-8"
					/>
				)}
			</section>
		</>
	);
}
