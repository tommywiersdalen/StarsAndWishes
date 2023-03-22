import { redirect } from "@remix-run/node";
import { useNavigate, useNavigation } from "@remix-run/react";
import StarsAndWishesForm from "~/components/starsandwishes/StarsAndWishesForm";
import LoadingSpinner from "../../../components/util/Loading";
import Modal from "../../../components/util/Modal";
import { addAnswer } from "../../../data/answers.server";
import { requireUserSession } from "../../../data/auth.sever";

export default function AddStarsAndWishesPage() {
	const navigate = useNavigate();
	const navigation = useNavigation();
	const isSubmitting = navigation.state === "submitting";
	function closeHandler() {
		navigate("..");
	}
	return (
		<>
			{isSubmitting && (
				<div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full">
					<div className="my-[12rem]">
						<LoadingSpinner />
					</div>
				</div>
			)}
			{!isSubmitting && (
				<Modal onClose={closeHandler}>
					<StarsAndWishesForm />
				</Modal>
			)}
		</>
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
