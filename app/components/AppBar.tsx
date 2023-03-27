import { useLoaderData, Form } from "@remix-run/react";

export default function AppBar() {
	const userId = useLoaderData();
	return (
		<section>
			<div className="container max-w-full mx-auto px-6 py-12 bg-black/20">
				<nav className="flex items-center justify-between font-bold text-white">
					<div className=" flex items-center justify-center">
						<a
							href="/"
							className=" text-6xl text-white font-rouge">
							Stars and Wishes
						</a>
					</div>

					<div className="h-10 flex justify-center items-center">
						{userId && (
							<Form
								action="/logout"
								method="post"
								id="logout-form">
								<button className="flex flex-col md:flex-row items-center justify-between space-x-4 p-2 px-8 text-white bg-amber-600 rounded-lg hover:bg-amber-400 duration-200 focus:outline-none">
									<span className="text-2xl mb-1 md:mb-0">Log out</span>
								</button>
							</Form>
						)}
					</div>
				</nav>
			</div>
		</section>
	);
}
