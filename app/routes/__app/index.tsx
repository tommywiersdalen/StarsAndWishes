import { Link } from "@remix-run/react";
import { GiMagicLamp, GiCursedStar } from "react-icons/gi";
import dragon from "../../../public/images/pngegg.png";

export default function Index() {
	return (
		<section>
			<div className="flex flex-col items-center justify-center mx-auto mt-12 max-w-xl">
				<h1 className="text-4xl text-white font-bold tracking-wider mb-6">
					Welcome Wildlings!
				</h1>
				<p
					className="text-white text-xl px-4 text-center
                ">
					This is the stars and wishes page. Here you can submit your stars and
					whishes post session to your dungeon master. Just click the button and
					send away!
				</p>
				<Link
					to="/starsandwishes?page=1"
					className="flex items-center mt-10 p-2 px-8 text-white bg-cyan-800 rounded-lg hover:bg-cyan-500 duration-200 focus:outline-none">
					<GiMagicLamp size={40} />
					<span className="mx-2">Submit answers!</span>
					<GiCursedStar size={40} />
				</Link>
			</div>
			<div className="flex flex-col items-center mx-md mx-auto justify-center mt-3">
				<img
					src={`${dragon}`}
					alt=""
					className="opacity-50 max-w-md"
				/>
			</div>
		</section>
	);
}
