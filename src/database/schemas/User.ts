import mongoose from "mongoose";

const User = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    cellphone: {
        type: Number,
        required: true,
    },
    cpf_cnpj: {
        type: String,
        unique: true,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    isOrganizer: {
        type: Boolean,
        required: true,
    },
});

export default mongoose.model("User", User);