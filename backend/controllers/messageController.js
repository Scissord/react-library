import Conversation from '../models/conversationModel.js';
import Message from '../models/messageModel.js';

export const getMessages = async (req, res) => {
	try {
		const receiverId = req.params.receiverId;
		const senderId = req.user._id;

		const conversation = await Conversation.findOne({
			participants: { $all: [senderId, receiverId] }
		}).populate("messages");

		if(!conversation) return res.status(200).send({ messages: [] });
		const messages = conversation.messages;

		res.status(200).send({ messages: messages });
	}	catch (err) {
		console.log("Error in getMessage controller", err.message);
		res.status(500).send({ error: "Internal Server Error" });
	}
};

export const sendMessage = async (req, res) => {
	try {
		const { message } = req.body;
		const receiverId = req.params.receiverId;
		// check middleware protectRoute
		const senderId = req.user._id;

		let conversation = await Conversation.findOne({
			participants: { $all: [senderId, receiverId] },
		});

		if(!conversation) {
			conversation = await Conversation.create({
				participants: [senderId, receiverId]
			});
		};

		const newMessage = new Message({
			senderId,
			receiverId,
			message
		});
		if(newMessage) conversation.messages.push(newMessage._id);

		//socket io

		// this will run in parallel
		await Promise.all([conversation.save(), newMessage.save()]);

		res.status(201).send({ message: newMessage });
	}	catch (err) {
		console.log("Error in sendMessage controller", err.message);
		res.status(500).send({ error: "Internal Server Error" });
	}
};
