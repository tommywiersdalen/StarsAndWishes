export default function Modal({ children, onClose }) {
	return (
		<div
			className="fixed top-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-screen w-full"
			onClick={onClose}>
			<dialog
				className="fixed top-[7vh]
				 mx-auto max-w-md md:max-w-xl flex flex-col md:flex-row bg-slate-800 border-4 border-slate-800 rounded-xl shadow-2xl"
				open
				onClick={(event) => event.stopPropagation()}>
				{children}
			</dialog>
		</div>
	);
}
