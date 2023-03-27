import { Link } from "@remix-run/react";

export default function StarsAndWishesList({ answers, currentPage, user }) {
	return (
		<div className="container mx-auto max-w-7xl p-2 md:p-10">
			<ol className="grid gap-4 grid-cols-1 text-white md:grid-cols-3 lg:grid-cols-3">
				{answers.map((answer) => (
					<li
						key={answer.id}
						className="p-4 ">
						<Link
							to={`/view/${answer.id}`}
							state={{
								currentPage: currentPage,
								answer: answer,
								isDM: user.isDM,
							}}>
							<div className="bg-amber-400  text-center px-4 py-6 rounded-lg hover:scale-110 duration-200">
								<div>
									<p>From session:</p>
									{formatDate(answer.dateAdded)}
								</div>
								{user.isDM && (
									<div className="flex justify-end items-end">
										<p className="text-sm">{answer.userName}</p>
									</div>
								)}
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
