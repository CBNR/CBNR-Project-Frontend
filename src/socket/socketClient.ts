import io from "socket.io-client";
import { SERVER_URL } from "../config";

const socket = io(SERVER_URL);

export const sendMessage = (userId: string, message: string, chatroomId: string) => {
    socket.emit("chat_msg", { userId, message, roomId: chatroomId });
};
