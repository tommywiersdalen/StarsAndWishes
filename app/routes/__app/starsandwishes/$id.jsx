import {
	useMatches,
	useNavigate,
	useParams,
	useLocation,
} from "@remix-run/react";
import StarsAndWishesListItem from "../../../components/starsandwishes/StarsAndWishesListItem";
import Modal from "../../../components/util/Modal";

export default function ViewAnswer() {
	const params = useParams();
	console.log(params);
	let { state } = useLocation();
	console.log(state);
	const matches = useMatches();
	const { data: answers } = matches.find(
		(match) => match.id === "routes/__app/starsandwishes"
	).data;
	const answer = answers.find((answer) => answer.id === params.id);
	const navigate = useNavigate();
	function closeHandler() {
		navigate(`/starsandwishes?page=${state}`);
	}
	return (
		<Modal onClose={closeHandler}>
			<StarsAndWishesListItem answer={answer} />
		</Modal>
	);
}

export function meta() {
	return {
		title: "View",
		description: "View Answer",
	};
}
