import { Box, Icon, Link, Title } from "@ui"
import { useState } from "react"
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";

function Login() {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("password");
	const [showPassword, setShowPassword] = useState(false);

	const handleReset = () => {
		setUsername("");
		setPassword("");
	};

	const handleSubmit = async () => {
		alert('da');
	};

	return (
		<form className="flex flex-col gap-4 px-8 pt-8 pb-6 border border-white w-[400px] rounded-xl">
			<Title text="Login" className=" text-3xl"/>

			<Box className="flex flex-col gap-2">
				<Box className="form-control w-full">
					<Box className="label">
						<span className="label-text">Username</span>
					</Box>
					<Box className="input border-white flex items-center gap-2">
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" /></svg>
						<input 
							type="text" 
							className="grow" 
							placeholder="Example: Scissxrd"
							value={username}
							onChange={(e) => setUsername(e.target.value)} 
						/>
					</Box>
				</Box>
				<Box className="form-control w-full">
					<Box className="label">
						<span className="label-text">Password</span>
					</Box>
					<Box className="input border-white flex items-center gap-2">
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z" clipRule="evenodd" /></svg>
						<input 
							type={showPassword ? 'text' : 'password'} 
							className="grow select-none" 
							placeholder="Must be >= 6 characters"
							value={password}
							onChange={(e) => setPassword(e.target.value)} 
						/>
						<kbd className="kbd kbd-sm border-white">
							<Icon 
								icon={showPassword ? <FaRegEyeSlash/> : <FaRegEye/>} 
								onClick={() => setShowPassword(!showPassword)}
							/>
						</kbd>
					</Box>
				</Box>
			</Box>
			
			<Link 
				href="#" 
				text="Don't have an account?" 
				className="text-sm mt-2"
			/>

			<Box className="flex ml-auto gap-3">
				<button 
					className="btn btn-sm btn-success text-white"
					onClick={() => handleSubmit()}
				>
					Submit
				</button>
				<button 
					className="btn btn-sm btn-error text-white" 
					onClick={() => handleReset()}
				>
						Reset
				</button>
			</Box>
		</form>
	)
}

export default Login