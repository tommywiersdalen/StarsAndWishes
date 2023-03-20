import { Outlet } from "@remix-run/react";
import AppBar from "~/components/AppBar";

export default function AppLayout() {
	return (
		<>
			<AppBar />

			<Outlet />
		</>
	);
}
