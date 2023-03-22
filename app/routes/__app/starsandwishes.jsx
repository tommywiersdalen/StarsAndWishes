import { Link, Outlet } from "@remix-run/react";
import { requireUserSession } from "../../data/auth.sever";
export default function StarsAndWishesLayout() {
	return (
		<>
			<Outlet />
			<section>
				<div className="flex flex-col items-center justify-center mx-auto mt-12 max-w-xl">
					<Link
						to="add"
						className="flex items-center mt-10 p-2 px-8 text-white bg-cyan-800 rounded-lg hover:bg-cyan-500 duration-200 focus:outline-none">
						<span className="mx-2">Add</span>
					</Link>
				</div>
			</section>
		</>
	);
}

export async function loader({ request }) {
	const userId = await requireUserSession(request);

	return userId;
}
