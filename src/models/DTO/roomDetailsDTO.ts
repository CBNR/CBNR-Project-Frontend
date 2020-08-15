import { RoomType } from "../room";
import User from "../user";

export default interface RoomDetailsDTO {
    id: string;
    name: string;
    type: RoomType;
    children: string[];
    connectedUsers: User[];
}
