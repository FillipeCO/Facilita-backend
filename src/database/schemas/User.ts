import mongoose from "mongoose";

const User = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    cellphone: {
        type: Number,
        required: true,
    },
    birthdate: {
        type: String,
        required: true,
    },
    cpf: {
        type: Number,
        unique: true,
        required: true,
    },
    cep: {
        type: Number,
        required: true,
    },
    state: {
        type: String,
        required: true,
    },
    city: {
        type: String,
        required: true,
    }
});

export default mongoose.model("User", User);