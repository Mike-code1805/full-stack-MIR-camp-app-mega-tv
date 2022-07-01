import { Types } from "mongoose";

export interface User {
    id: UserIdType;
    username: string;
    lastname: string;
    address: string;
    nroApart: string;
    plan: string;
    email: string;
    phone: string;
    created_at: Date;
    updated_at: Date | null;
}

export type EditUser = {
    id: string;
    username?: string;
    lastname?: string;
    address?: string;
    nroApart?: string;
    plan?: string;
    email?: string;
    phone?: string;
    updated_at: Date | null;
};

export type UserIdType = {
    _id: Types.ObjectId;
};

export type CreateUser = Omit<User, 'id' | 'createdAt' | 'editedAt'>;
