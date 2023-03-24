export default function StarsAndWishesListItem({ answer }) {
	console.log(answer);
	return (
		<div className="flex flex-col mx-auto justify-center items-center text-center z-50">
			<div className="mx-2 p-4 flex flex-col">
				<h2 className="text-white text-lg">Player Questions</h2>
				<p className="text-white mt-3 mb-2">
					What are the things you liked best in our adventure today? What did
					you love?
				</p>
				<p className=" text-white text-lg">Answer:</p>
				<p className="text-white ">{answer.playerQuestion1}</p>

				<p className="text-white mt-3 mb-2">
					What are you looking forward to in our future games?
				</p>
				<p className=" text-white text-lg">Answer:</p>
				<p className="text-white ">{answer.playerQuestion2}</p>
			</div>
			<div className="mx-2  p-4 flex flex-col">
				<h2 className="text-white text-lg">Character Questions</h2>
				<p className="text-white mt-3 mb-2">
					In your character’s mind what was the most important thing that
					happened this session? What do they think about this
					event/information/interaction/etc?
				</p>
				<p className=" text-white text-lg">Answer:</p>
				<p className="text-white ">{answer.characterQuestion1}</p>

				<p className="text-white mt-3 mb-2">
					What does your character want? What is their biggest
					goal/priority/wish right now?
				</p>
				<p className=" text-white text-lg">Answer:</p>
				<p className="text-white ">{answer.characterQuestion2}</p>
			</div>
		</div>
	);
}
