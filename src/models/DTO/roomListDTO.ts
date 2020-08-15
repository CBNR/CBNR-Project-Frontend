import { RoomType } from "../room";

export default interface RoomListDTO {
    id: string;
    name: string;
    type: RoomType;
    userCount: number;
}
