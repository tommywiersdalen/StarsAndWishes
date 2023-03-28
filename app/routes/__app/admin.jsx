import { useLoaderData, useNavigation } from "@remix-run/react";
import StarsAndWishesList from "../../components/starsandwishes/StarsAndWishesList";
import LoadingSpinnerAlt from "../../components/util/LoadingAlt";
import Pagination from "../../components/util/Pagination";
import { requireUserSession } from "../../data/auth.sever";
import { prisma } from "../../data/database.server";
const PER_PAGE = 6;
export async function loader({ request }) {
	const user = await requireUserSession(request);
	if (!user.isDM) {
		const error = new Error("You must be a DM to view this page!");
		error.status = 403;
		throw error;
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

	countOptions.where = options.where;

	const [answers, count] = await Promise.all([
		prisma.answer.findMany(options),

		prisma.answer.count(countOptions),
	]);
	return { data: answers, count: count, currentPage: currentPage, user: user };
}

export default function DMPage() {
	const navigation = useNavigation();
	const isloading = navigation.state === "loading";
	const { data: answers, count, currentPage, user } = useLoaderData();
	const totalPages = Math.ceil(count / PER_PAGE);

	const hasAnswers = answers && answers.length > 0;
	return (
		<>
			{isloading && <LoadingSpinnerAlt />}
			{!isloading && (
				<div>
					<section>
						<div className="flex justify-center mx-auto items-center">
							<h2 className="text-white text-6xl font-bold font-rouge mt-4">
								Welcome Game Master
							</h2>
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
									Your players has not submitted any answers yet!
								</p>
							</div>
						</section>
					)}
				</div>
			)}
		</>
	);
}
