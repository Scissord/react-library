import User from "../models/userModel";

export const getUsers = async (req, res) => {
	try {
		const loggedInUserId = req.user._id;
		const filteredUsers = await User.find({ _id: { $ne: loggedInUserId } }).select("-password"); // $ne - don't get user self

		res.status(200).send({ users: filteredUsers })
	}	catch (err) {
		console.log("Error in getUsers controller", err.message);
		res.status(500).send({ error: "Internal Server Error" });
	}
};
