import { Link } from "@remix-run/react";

export default function StarsAndWishesList({ answers, currentPage }) {
	console.log(currentPage);
	return (
		<div className="container mx-auto max-w-7xl p-2 md:p-10">
			<ol className="grid gap-4 grid-cols-1 text-white md:grid-cols-4  lg:grid-cols-6">
				{answers.map((answer) => (
					<li
						key={answer.id}
						className="p-4 ">
						<Link
							to={answer.id + `?page=${currentPage}`}
							state={currentPage}>
							<div className="bg-teal-400 px-4 py-6">
								{formatDate(answer.dateAdded)}
							</div>
						</Link>
					</li>
				))}
			</ol>
		</div>
	);
}
function formatDate(date) {
	const formattedDate = new Date(date).toLocaleDateString();
	return formattedDate;
}
