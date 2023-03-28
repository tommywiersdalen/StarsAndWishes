import { Outlet } from "@remix-run/react";
import AppBar from "~/components/AppBar";
import { getUserFromSession } from "../data/auth.sever";

export default function AppLayout() {
	return (
		<>
			<AppBar />

			<Outlet />
			<footer className="fixed bottom-0 ml-4">
				<div className="flex justify-center items-center text-white font-mono">
					<p>
						Made with ❤️ by{" "}
						<a
							className="hover:text-blue-200"
							href="https://github.com/tommywiersdalen"
							target="_blank"
							rel="noopener noreferrer">
							Tommy Wiersdalen
						</a>
					</p>
				</div>
			</footer>
		</>
	);
}

export function loader({ request }) {
	return getUserFromSession(request);
}
