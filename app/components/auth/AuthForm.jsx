import { FaLock, FaUserPlus } from "react-icons/fa";
import {
	Form,
	Link,
	useActionData,
	useNavigation,
	useSearchParams,
} from "@remix-run/react";
import LoadingSpinner from "../util/Loading";
function AuthForm() {
	const [searchParams] = useSearchParams();
	const navigation = useNavigation();
	const validationErrors = useActionData();

	const authMode = searchParams.get("mode") || "login";
	const submitBtnCaption = authMode === "login" ? "Login" : "Create user";
	const toggleBtnCaption = authMode === "login" ? "Create user" : "Login";
	const isSubmitting = navigation.state === "submitting";
	const isRedirecting =
		navigation.state === "loading" &&
		navigation.formData != null &&
		navigation.formAction !== navigation.location.pathname;

	return (
		<>
			{isSubmitting && (
				<div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full">
					<div className="my-[12rem]">
						<LoadingSpinner />
					</div>
				</div>
			)}
			{!isSubmitting && !isRedirecting && (
				<Form
					method="post"
					id="auth-form"
					className=" 
				flex flex-col mx-auto my-[4rem] max-w-md bg-gray-600 border-4 border-gray-600 rounded-xl shadow-2xl">
					{authMode === "login" && (
						<div className="flex flex-col animate-fade">
							<div className="flex flex-col mx-auto border mt-4 rounded-full p-10 ">
								<FaLock
									className=""
									color="white"
									size={40}
								/>
							</div>
							<div className="flex flex-col justify-center items-center mx-auto my-4">
								<label
									className="text-white text-xl mb-1"
									htmlFor="email">
									Email Adress
								</label>
								<input
									className="shadow appearance-none border rounded w-full py-1 px-3 text-gray-700 leading-tight focus:outline-green-600 invalid:focus:outline-red-500"
									type="email"
									id="email"
									name="email"
									required
								/>

								<label
									htmlFor="password"
									className="text-white text-xl mb-1">
									Password
								</label>
								<input
									className="shadow appearance-none border rounded w-full py-1 px-3 text-gray-700 leading-tight focus:outline-green-600 invalid:focus:outline-red-500"
									type="password"
									id="password"
									name="password"
									required
									minLength={8}
								/>
							</div>
							<div className=" mx-10 border border-b mt-2 border-white max-w-sm"></div>
							<div className="flex flex-col mx-auto mt-2">
								<button className="text-white text-xl bg-green-700 hover:bg-green-500 px-4 py-2 rounded-lg mb-3 mt-2">
									{submitBtnCaption}
								</button>
								<Link
									className="text-white text-xl bg-cyan-800 hover:bg-cyan-500 px-4 py-2 rounded-lg mb-4"
									to={authMode === "login" ? "?mode=signup" : "?mode=login"}>
									{toggleBtnCaption}
								</Link>
							</div>
						</div>
					)}
					{authMode !== "login" && (
						<div className="flex flex-col animate-fade">
							<div className="flex flex-col mx-auto border mt-4 rounded-full p-10 ">
								<FaUserPlus
									className=""
									color="white"
									size={40}
								/>
							</div>
							<div className="flex flex-col justify-center items-center mx-auto my-4">
								<label
									className="text-white text-xl mb-1"
									htmlFor="userName">
									Username
								</label>

								<input
									type="text"
									required
									name="userName"
									id="userName"
									className="shadow appearance-none border rounded w-full py-1 px-3 text-gray-700 leading-tight focus:outline-green-600 invalid:focus:outline-red-500"></input>

								<label
									className="text-white text-xl mb-1"
									htmlFor="email">
									Email Adress
								</label>
								<input
									className="shadow appearance-none border rounded w-full py-1 px-3 text-gray-700 leading-tight focus:outline-green-600 invalid:focus:outline-red-500"
									type="email"
									id="email"
									name="email"
									required
								/>

								<label
									htmlFor="password"
									className="text-white text-xl mb-1">
									Password
								</label>
								<input
									className="shadow appearance-none border rounded w-full py-1 px-3 text-gray-700 leading-tight focus:outline-green-600 invalid:focus:outline-red-500"
									type="password"
									id="password"
									name="password"
									required
									minLength={8}
								/>

								<label
									className="text-white text-xl mb-1"
									htmlFor="password2">
									Confirm password
								</label>

								<input
									type="password"
									required
									name="password2"
									id="password2"
									className="shadow appearance-none border rounded w-full py-1 px-3 text-gray-700 leading-tight focus:outline-green-600 invalid:focus:outline-red-500"></input>
							</div>
							<div className=" mx-10 border border-b mt-2 border-white max-w-sm"></div>
							<div className="flex flex-col mx-auto mt-2">
								<button className="text-white text-xl bg-green-700 hover:bg-green-500 px-4 py-2 rounded-lg mb-3 mt-2">
									{submitBtnCaption}
								</button>
								<Link
									className="text-white text-xl bg-cyan-800 hover:bg-cyan-500 px-4 py-2 rounded-lg mb-4"
									to={authMode === "login" ? "?mode=signup" : "?mode=login"}>
									{toggleBtnCaption}
								</Link>
							</div>
						</div>
					)}
				</Form>
			)}
		</>
	);
}

export default AuthForm;
