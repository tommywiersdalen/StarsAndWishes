import { redirect } from "@remix-run/node";
import { useNavigate } from "@remix-run/react";
import StarsAndWishesForm from "~/components/starsandwishes/StarsAndWishesForm";
import Modal from "../../../components/util/Modal";
import { addAnswer } from "../../../data/answers.server";
import { requireUserSession } from "../../../data/auth.sever";

export default function AddStarsAndWishesPage() {
	const navigate = useNavigate();
	function closeHandler() {
		navigate("..");
	}
	return (
		<Modal onClose={closeHandler}>
			<StarsAndWishesForm />
		</Modal>
	);
}
export async function action({ request }) {
	const userId = await requireUserSession(request);
	const formData = await request.formData();
	const answerData = Object.fromEntries(formData);
	console.log(answerData);
	try {
		await addAnswer(answerData, userId);
		return redirect("/starsandwishes");
	} catch (error) {
		return error;
	}
}
