import bcrypt from 'bcryptjs';
import User from '../models/userModel.js';
import generateTokenAndSendCookie from '../utils/generateToken.js';

export const signup = async (req, res) => {
	try {
		const { fullName, userName, password, confirmPassword, gender } = req.body;

		const user = await User.findOne({ userName });
		
		// should be in validate function (service)
		if(password !== confirmPassword) return res.status(400).send({ error: "Passwords don't match" });
		if(user) return res.status(400).send({ error: "Username already exist" });

		// HASH PASSWORD
		const salt = await bcrypt.genSalt(10);
		const hashedPassword = await bcrypt.hash(password, salt);

		// https://avatar-placeholder.iran.liara.run/
		const boyProfilePicture = `https://avatar-placeholder.iran.liara.run/public/boy?username=${userName}`;
		const girlProfilePicture = `https://avatar-placeholder.iran.liara.run/public/girl?username=${userName}`;

		const newUser = new User({
			fullName,
			userName,
			gender,
			password: hashedPassword,
			profilePicture: gender === "male" ? boyProfilePicture : girlProfilePicture
		});

		if(newUser) {
			// generate JWT TOKEN 
			generateTokenAndSendCookie(newUser._id, res);
			// save in MongoDB
			await newUser.save();
			
			res.status(201).send({ message: "Successfully created", user: newUser });
		} else {
			res.status(400).send({ error: "Invalid user data" });
		}
	}	catch (err) {
		console.log("Error in signup controller", err.message);
		res.status(500).send({ error: "Internal Server Error" });
	};
};

export const login = async (req, res) => {
	try {

	}	catch (err) {
		
	}
};

export const logout = async (req, res) => {
	console.log("logout");
};
