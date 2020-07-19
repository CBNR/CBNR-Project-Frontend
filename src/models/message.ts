import User from "./user";

export default interface Message {
    id: string;
    text: string;
    timestamp: string;
    user: User;
}