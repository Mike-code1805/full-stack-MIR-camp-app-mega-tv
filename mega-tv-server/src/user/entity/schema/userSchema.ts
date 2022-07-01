import mongoose from "mongoose";
import { User } from "../types/User";

const Schema = mongoose.Schema;

export const userSchemma = new Schema<User>({
    name: { 
        type: String,
    },
    lastname:{
        type: String, 
    },
    address: {
        type: String,
        default: "",
    },
    nroApart: {
        type: String,
        default: "",
    },
    plan: {
        type: String,
        default: "",
    },
    email:{
        type: String,
        default: "",
    },
    phone:{
        type: String,
        default: "",
    },
    created_at: { 
        type: Date,
        default: Date.now,
    },
    updated_at: { 
        type: Date,
        default: Date.now,
    },
});
