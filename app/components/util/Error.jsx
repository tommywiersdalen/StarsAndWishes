import { FaExclamationCircle } from "react-icons/fa";

function Error({ title, children }) {
	return (
		<div className="flex flex-col mt-40 justify-center items-center text-white text-4xl">
			<div className="">
				<FaExclamationCircle size={50} />
			</div>
			<h2>{title}</h2>
			<p className="text-center">{children}</p>
		</div>
	);
}

export default Error;
