import dragon from "../../../public/images/pngegg.png";
export default function LoadingSpinner() {
	return (
		<div className="flex flex-col mx-auto w-96">
			<img
				className="text-white animate-spin"
				src={dragon}
				alt=""
			/>
		</div>
	);
}
