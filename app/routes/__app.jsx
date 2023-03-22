import { Outlet } from "@remix-run/react";
import AppBar from "~/components/AppBar";
import { getUserFromSession } from "../data/auth.sever";

export default function AppLayout() {
	return (
		<>
			<AppBar />

			<Outlet />
		</>
	);
}

export function loader({ request }) {
	return getUserFromSession(request);
}
