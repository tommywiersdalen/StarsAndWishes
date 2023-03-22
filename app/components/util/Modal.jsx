export default function Modal({ children, onClose }) {
	return (
		<div
			className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full"
			onClick={onClose}>
			<dialog
				className="fixed top-[7vh]
				 mx-auto max-w-md md:max-w-xl flex flex-col md:flex-row bg-gray-600 border-4 border-gray-600 rounded-xl shadow-2xl"
				open
				onClick={(event) => event.stopPropagation()}>
				{children}
			</dialog>
		</div>
	);
}
