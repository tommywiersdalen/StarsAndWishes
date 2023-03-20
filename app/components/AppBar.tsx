import { FaUserTimes } from "react-icons/fa";
export default function AppBar() {
	return (
		<section>
			<div className="container max-w-full mx-auto px-6 py-12 ">
				<nav className="flex items-center justify-between font-bold text-white">
					<div className=" flex items-center justify-center">
						<h1 className="text-4xl text-white">Stars and Wishes</h1>
					</div>
					<div className="h-10 flex justify-center items-center">
						<button className="flex items-center justify-between space-x-4 p-2 px-8 text-white bg-cyan-800 rounded-lg hover:bg-cyan-500 duration-200 focus:outline-none">
							<span className="text-2xl">Log in</span>
							<FaUserTimes size={40} />
						</button>
					</div>
				</nav>
			</div>
		</section>
	);
}
