import { Box, Icon, Link, Title, Section } from "@ui"
import { useState } from "react"
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
import { FaUser, FaKey } from "react-icons/fa";

function Login() {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
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

			<Section className="flex flex-col gap-2">
				<Box className="form-control w-full">
					<Box className="label">
						<span className="label-text">Username</span>
					</Box>
					<Box className="input border-white flex items-center gap-2">
						<FaUser/>
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
						<FaKey/>
						{/* Must be >= 6 characters */}
						<input 
							type={showPassword ? 'text' : 'password'} 
							className="grow select-none" 
							placeholder="******"
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
			</Section>
			
			<Link 
				href="#" 
				text="Don't have an account?" 
				className="text-sm mt-2"
			/>

			<Section className="flex ml-auto gap-3">
				<button 
					className="btn btn-sm btn-success text-white"
					onClick={() => handleSubmit()}
				>
					Login
				</button>
				<button 
					className="btn btn-sm btn-error text-white" 
					onClick={() => handleReset()}
				>
						Reset
				</button>
			</Section>
		</form>
	)
}

export default Login