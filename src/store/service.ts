import axios from "axios";
import { SERVER_URL } from "../config/config";

export const login = async (username: string, avatarId: string) => {
    const response = await axios.post(`${SERVER_URL}/login`, { username, avatarId });
    return response.data;
};
