import React from "react";
import { Link, useSearchParams } from "@remix-run/react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

/**
 * @type {React.FC<{
 * totalPages: number|string
 * pageParam?: string
 * }>}
 */
const Pagination = ({
	totalPages = Number.MAX_SAFE_INTEGER,
	pageParam = "page",
	className = "",
	...attrs
}) => {
	const [queryParams] = useSearchParams();
	const currentPage = Number(queryParams.get(pageParam) || 1);
	totalPages = Number(totalPages);

	const previousQuery = new URLSearchParams(queryParams);
	previousQuery.set(pageParam, currentPage - 1);
	const nextQuery = new URLSearchParams(queryParams);
	nextQuery.set(pageParam, currentPage + 1);
	const pagesArray = [];
	for (let index = 0; index < totalPages; index++) {
		pagesArray.push(index + 1);
	}

	return (
		<nav
			className={["flex justify-between items-center text-white", className]
				.filter(Boolean)
				.join(" ")}
			{...attrs}>
			{currentPage <= 1 && (
				<span>
					<div className="bg-slate-800 rounded-lg shadow-lg p-4 cursor-not-allowed">
						<FaArrowLeft />
					</div>
				</span>
			)}
			{currentPage > 1 && (
				<Link to={`?${previousQuery.toString()}`}>
					<div className="bg-amber-600 rounded-lg hover:bg-amber-400  shadow-lg p-4 hover:scale-110 duration-200">
						<FaArrowLeft />
					</div>
				</Link>
			)}

			{pagesArray.map((page) => (
				<Link
					className="hidden md:flex"
					key={page}
					to={`?page=${page}`}>
					{page == currentPage && (
						<p className="text-blue-300 shadow-xl  bg-slate-800 p-4 border-blue-300 border-2 rounded">
							{page}
						</p>
					)}
					{page != currentPage && (
						<p className="bg-slate-800 p-4 shadow-xl rounded hover:scale-105">
							{page}
						</p>
					)}
				</Link>
			))}

			<div className="md:hidden">
				<p className="text-blue-300 shadow-xl  bg-slate-800 px-4 py-2 border-blue-300 border-2 rounded">
					{currentPage}
				</p>
			</div>
			{currentPage >= totalPages && (
				<span>
					<div className="bg-slate-800 rounded-lg shadow-lg p-4 cursor-not-allowed">
						<FaArrowRight />
					</div>
				</span>
			)}
			{currentPage < totalPages && (
				<Link to={`?${nextQuery.toString()}`}>
					<div className=" bg-amber-600 rounded-lg hover:bg-amber-400  shadow-lg p-4 hover:scale-110 uration-200">
						<FaArrowRight />
					</div>
				</Link>
			)}
		</nav>
	);
};

export default Pagination;
