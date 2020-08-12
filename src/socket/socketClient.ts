import io from "socket.io-client";
import { SERVER_URL } from "../config/config";

const socket = io(SERVER_URL);

export const sendMessage = (message: string) => {
    socket.emit("send_msg", message);
};

export const getRoomList = () => {
    socket.emit("room_list");
};

export const getRoomDetails = () => {
    socket.emit("room_details");
};

export const joinRoom = (roomId: string) => {
    socket.emit("join_room", roomId);
};

export default socket;
