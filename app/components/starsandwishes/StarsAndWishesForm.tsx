import { Form } from "@remix-run/react";
export default function StarsAndWishesForm() {
	return (
		<Form
			method="post"
			id="questions-form">
			<div className="mx-2 p-4 flex flex-col">
				<h2 className="text-white text-lg">Player Questions</h2>
				<label
					htmlFor="playerQuestion1"
					className="text-white mt-3 mb-2">
					What are the things you liked best in our adventure today? What did
					you love?
				</label>
				<input
					id="playerQuestion1"
					name="playerQuestion1"
					type="text"
					required
					placeholder="Your answer"
					className="shadow appearance-none border rounded w-full py-5 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
				/>
				<label
					htmlFor="playerQuestion2"
					className="text-white mt-3 mb-2">
					What are you looking forward to in our future games?
				</label>
				<input
					id="playerQuestion2"
					name="playerQuestion2"
					type="text"
					required
					placeholder="Your answer"
					className="shadow appearance-none border rounded w-full py-5 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
				/>
			</div>
			<div className="mx-2  p-4 flex flex-col">
				<h2 className="text-white text-lg">Character Questions</h2>
				<label
					htmlFor="characterQuestion1"
					className="text-white mt-3 mb-2">
					In your character’s mind what was the most important thing that
					happened this session? What do they think about this
					event/information/interaction/etc?
				</label>
				<input
					id="characterQuestion1"
					name="characterQuestion1"
					type="text"
					required
					placeholder="Your answer"
					className="shadow appearance-none border rounded w-full py-5 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
				/>
				<label
					htmlFor="characterQuestion2"
					className="text-white mt-3 mb-2">
					What does your character want? What is their biggest
					goal/priority/wish right now?
				</label>
				<input
					id="characterQuestion2"
					name="characterQuestion2"
					type="text"
					required
					placeholder="Your answer"
					className="shadow appearance-none border rounded w-full py-5 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
				/>
			</div>
			<button
				type="submit"
				className="  p-2 px-8 text-white text-xl font-bold tracking-wide bg-cyan-800 rounded-lg hover:bg-cyan-500 duration-200 focus:outline-none">
				submit
			</button>
		</Form>
	);
}
