export default interface Response<T = undefined> {
    success: boolean;
    msg: string;
    obj: T;
};