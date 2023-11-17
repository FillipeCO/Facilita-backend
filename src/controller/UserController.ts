import { Request, Response } from 'express';
import User from '../database/schemas/User';
import mongoose from 'mongoose';

class UserController {
    async create(request: Request, response: Response) {

        const { name, email, cellphone, cpf_cnpj, password, isOrganizer } = request.body;

        try {
            const userExists = await User.findOne({ cpf_cnpj });

            if (userExists) {
                return response.status(400).json({ error: "User with this CPF or CNPJ already exists!" });
            }

            const user = await User.create({
                name,
                email,
                cellphone,
                cpf_cnpj,
                password,
                isOrganizer,
            });
            return response.status(201).json(user);
        } catch (error) {
            return response.status(400).json(error);
        }
    }

    async getUsers(request: Request, response: Response) {
        try {
            const users = await User.find();

            return response.status(200).json(users);
        } catch (error) {
            return response.status(400).json(error);
        }
    }

    async getUser(request: Request, response: Response) {
        const { id } = request.params;

        try {
            const user = await User.findById(id);

            return response.status(200).json(user);
        } catch (error) {
            return response.status(400).json(error);
        }
    }

    async deleteUser(request: Request, response: Response) {
        const { id } = request.params;

        try {
            const user = await User.findByIdAndDelete(id);

            return response.status(200).json(user);
        } catch (error) {
            return response.status(400).json(error);
        }
    }

    async updateUser(request: Request, response: Response) {
        const { id } = request.params;
        const { name, email, cellphone, cpf_cnpj, password } = request.body;

        try {
            const user = await User.findByIdAndUpdate(id, {
                name,
                email,
                cellphone,
                cpf_cnpj,
                password,
            }, { new: true });

            return response.status(200).json(user);
        } catch (error) {
            return response.status(400).json(error);
        }
    }

    async loginUser(request: Request, response: Response) {
        const { email, password } = request.body;

        try {
            const user = await User.findOne({ email });

            if (!user) {
                return response.status(400).json({ error: "User not found!" });
            }

            function comparePassword(enteredPassword: string, userPassword: string): boolean {
                return enteredPassword === userPassword;
            }

            const isPasswordMatch = comparePassword(password, user.password);

            if (!isPasswordMatch) {
                return response.status(400).json({ error: "Invalid password!" });
            }

            return response.status(200).json(user);
        } catch (error) {
            return response.status(400).json(error);
        }

    }
}

export default new UserController();
