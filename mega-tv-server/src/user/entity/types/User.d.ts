import { Types } from "mongoose";

export interface User {
    id: UserIdType;
    username: string;
    lastname: string;
    email: string;
    isAdmin: boolean;
    password: string;
    img: string;
    created_at: Date;
    updated_at: Date | null;
    valid: boolean;
}

export type EditUser = {
    id: string;
    username?: string;
    email?: string;
    isAdmin?: boolean;
    password?: string;
    img?: string;
    updated_at?: Date | null;
    valid?: boolean;
};

export type UserIdType = {
    _id: Types.ObjectId;
};

export type CreateUser = Omit<User, 'id' | 'createdAt' | 'editedAt'>;

export type LoginUser = {
    password: string;
    email: string;
};