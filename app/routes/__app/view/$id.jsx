import { useNavigate, useLocation } from "@remix-run/react";
import StarsAndWishesListItem from "../../../components/starsandwishes/StarsAndWishesListItem";
import Modal from "../../../components/util/Modal";

export default function ViewAnswer() {
	let { state } = useLocation();

	const navigate = useNavigate();
	function closeHandler() {
		navigate(`/starsandwishes?page=${state.currentPage}`);
	}
	return (
		<Modal onClose={closeHandler}>
			<StarsAndWishesListItem answer={state.answer} />
		</Modal>
	);
}

export function meta() {
	return {
		title: "View",
		description: "View Answer",
	};
}
