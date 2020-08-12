export default interface Response<T> {
    success: boolean;
    msg: string;
    obj: T;
};