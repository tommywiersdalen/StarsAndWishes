import { useLocation } from "@remix-run/react";
import StarsAndWishesListItem from "../../../components/starsandwishes/StarsAndWishesListItem";

export default function ViewAnswer() {
	let { state } = useLocation();

	return (
		<StarsAndWishesListItem
			answer={state.answer}
			currentPage={state.currentPage}
			isDM={state.isDM}
		/>
	);
}

export function meta() {
	return {
		title: "View",
		description: "View Answer",
	};
}
