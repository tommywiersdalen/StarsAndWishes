import { useNavigate } from "@remix-run/react";

export default function StarsAndWishesListItem({ answer, currentPage, isDM }) {
	const navigate = useNavigate();
	function closeHandler() {
		if (isDM) {
			navigate(`/admin?page=${currentPage}`);
		} else {
			navigate(`/starsandwishes?page=${currentPage}`);
		}
	}
	return (
		<div className="mx-auto max-w-md md:max-w-xl flex flex-col bg-slate-800 border-4 border-slate-800 rounded-xl shadow-2xl my-10">
			<div className="flex justify-end mr-2 mt-2">
				<button
					className="bg-amber-600 text-white  hover:bg-amber-400 px-4 py-2 rounded-lg"
					onClick={closeHandler}>
					Back
				</button>
			</div>
			<div className="flex flex-col mx-auto my-[1rem] max-w-md text-center">
				<div className="mx-2 p-4 flex flex-col">
					<h2 className="text-white text-xl font-bold">Player Questions</h2>
					<p className="text-white mt-3 mb-2 italic">
						What are the things you liked best in our adventure today? What did
						you love?
					</p>
					<p className=" text-white text-lg font-bold">Answer:</p>
					<p className="text-white ">{answer.playerQuestion1}</p>

					<p className="text-white mt-3 mb-2 italic">
						What are you looking forward to in our future games?
					</p>
					<p className=" text-white text-lg font-bold">Answer:</p>
					<p className="text-white ">{answer.playerQuestion2}</p>
				</div>
				<div className=" mx-10 border border-b mt-2 border-white "></div>
				<div className="mx-2  p-4 flex flex-col">
					<h2 className="text-white text-xl font-bold">Character Questions</h2>
					<p className="text-white mt-3 mb-2 italic">
						In your character’s mind what was the most important thing that
						happened this session? What do they think about this
						event/information/interaction/etc?
					</p>
					<p className=" text-white text-lg font-bold">Answer:</p>
					<p className="text-white ">{answer.characterQuestion1}</p>

					<p className="text-white mt-3 mb-2 italic">
						What does your character want? What is their biggest
						goal/priority/wish right now?
					</p>
					<p className=" text-white text-lg font-bold">Answer:</p>
					<p className="text-white ">{answer.characterQuestion2}</p>
				</div>
			</div>
		</div>
	);
}
