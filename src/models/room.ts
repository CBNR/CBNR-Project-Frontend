import User from "./user";

export enum RoomType {
    building = "BUILDING",
    room = "ROOM",
}

export default interface Room {
    id: string;
    name: string;
    type: RoomType;
    children: string[];
    connectedusers: User[];
}