import {
	Link,
	Links,
	LiveReload,
	Meta,
	Outlet,
	Scripts,
	ScrollRestoration,
	useCatch,
} from "@remix-run/react";
import Error from "../app/components/util/Error";
import styles from "./tailwind.css";

export const meta = () => ({
	charset: "utf-8",
	title: "Stars and wishes",
	viewport: "width=device-width,initial-scale=1",
});
function Document({ title, children }) {
	return (
		<html lang="en">
			<head>
				{title && <title>{title}</title>}
				<Meta />
				<Links />
			</head>
			<body>
				{children}
				<ScrollRestoration />
				<Scripts />
				<LiveReload />
			</body>
		</html>
	);
}

export default function App() {
	return (
		<Document>
			<Outlet />
		</Document>
	);
}

export function CatchBoundary() {
	const caughtResponse = useCatch();
	return (
		<Document title={caughtResponse.statusText}>
			<main>
				<Error title={caughtResponse.statusText}>
					<p>
						{caughtResponse.data?.message ||
							"Something went wrong. Please try again later"}
					</p>
					<p>
						Back to <Link to="/">saftey</Link>.
					</p>
				</Error>
			</main>
		</Document>
	);
}

export function ErrorBoundary({ error }) {
	return (
		<Document title="An error occurred">
			<main>
				<Error title="An error occurred">
					<p>
						{error.message || "Something went wrong. Please try again later"}
					</p>
					<p>
						Back to <Link to="/">saftey</Link>.
					</p>
				</Error>
			</main>
		</Document>
	);
}

export const links = () => [{ rel: "stylesheet", href: styles }];
