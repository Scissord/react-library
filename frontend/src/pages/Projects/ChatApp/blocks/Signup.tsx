import { Box, Icon, Link, Title, Section } from "@ui"
import { useState } from "react"
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
import { FaUser, FaKey } from "react-icons/fa";

function SignUp() {
	const [name, setName] = useState("");
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [showPassword, setShowPassword] = useState(false);
	const [confirmPassword, setConfirmPassword] = useState("");
	const [gender, setGender] = useState(0);

	const handleShowPassword = (show: boolean) => {
		if(password === "") alert("empty password");
		setShowPassword(show);
	}

	const handleReset = () => {
		setName("");
		setUsername("");
		setPassword("");
		setConfirmPassword("");
		setGender(0);
	};

	const handleSubmit = async () => {
		if(password !== confirmPassword) alert("Password not equal to Confirm Password");
		alert('da');
	};

	return (
		<form className="flex flex-col gap-4 px-8 pt-8 pb-6 border border-white w-[400px] rounded-xl">
			<Title text="Sign Up" className=" text-3xl"/>

			<Section className="flex flex-col gap-2">
				<Box className="form-control w-full">
					<Box className="label">
						<span className="label-text">Full Name</span>
					</Box>
					<Box className="input border-white flex items-center gap-2">
						<FaUser/>
						<input 
							type="text" 
							className="grow" 
							placeholder="Friedrich Wilhelm Nische"
							value={name}
							onChange={(e) => setName(e.target.value)} 
						/>
					</Box>
				</Box>
				<Box className="form-control w-full">
					<Box className="label">
						<span className="label-text">Username</span>
					</Box>
					<Box className="input border-white flex items-center gap-2">
						<FaUser/>
						<input 
							type="text" 
							className="grow" 
							placeholder="Scissxrd"
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
								onClick={() => handleShowPassword(!showPassword)}
							/>
						</kbd>
					</Box>
				</Box>
				<Box className="form-control w-full">
					<Box className="label">
						<span className="label-text">Confirm Password</span>
					</Box>
					<Box className="input border-white flex items-center gap-2">
						<FaKey/>
						<input
							type='password'
							className="grow select-none" 
							placeholder="******"
							value={confirmPassword}
							onChange={(e) => setConfirmPassword(e.target.value)} 
						/>
					</Box>
				</Box>
			</Section>

			<Section className="flex items-center gap-2">
				Male
				<input 
					type="checkbox" 
					value={gender}
					checked={gender === 0}
					onClick={() => setGender(0)}
					className="checkbox checkbox-sm border-orange-400 checked:border-indigo-800 [--chkbg:theme(colors.indigo.600)] [--chkfg:orange]" 
				/>
				Female
				<input 
					type="checkbox" 
					value={gender}
					checked={gender === 1}
					onClick={() => setGender(1)}
					className="checkbox checkbox-sm [--chkbg:oklch(var(--a))] [--chkfg:oklch(var(--p))]"			
				/>
			</Section>

			<Link 
				href="#" 
				text="Already have an account?" 
				className="text-sm"
			/>

			<Section className="flex ml-auto gap-3">
				<button 
					className="btn btn-sm btn-success text-white"
					onClick={() => handleSubmit()}
				>
					Sign Up
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

export default SignUp