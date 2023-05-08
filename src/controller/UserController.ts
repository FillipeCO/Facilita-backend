import { Request, Response } from 'express';
import User from '../database/schemas/User';

class UserController {
    async create (request: Request, response: Response) {

        const { name, cellphone, birthdate, cpf, cep, state, city } = request.body;

        try {
            const userExists = await User.findOne({ cpf });

            if (userExists) {
                return response.status(400).json({ error: "User with this CPF already exists!" });
            }

            const user = await User.create({
                name,
                cellphone,
                birthdate,
                cpf,
                cep,
                state,
                city
            });
            return response.status(201).json(user);
        } catch (error) {
            return response.status(400).json(error);
        }
    }

    async getUsers (request: Request, response: Response) {
        try {
            const users = await User.find();

            return response.status(200).json(users);
        } catch (error) {
            return response.status(400).json(error);
        }
    }

    async getUser (request: Request, response: Response) {
        const { id } = request.params;

        try {
            const user = await User.findById(id);

            return response.status(200).json(user);
        } catch (error) {
            return response.status(400).json(error);
        }
    }

    async deleteUser (request: Request, response: Response) {
        const { id } = request.params;

        try {
            const user = await User.findByIdAndDelete(id);

            return response.status(200).json(user);
        } catch (error) {
            return response.status(400).json(error);
        }
    }

    async updateUser (request: Request, response: Response) {
        const { id } = request.params;
        const { name, cellphone, birthdate, cpf, cep, state, city } = request.body;

        try {
            const user = await User.findByIdAndUpdate(id, {
                name,
                cellphone,
                birthdate,
                cpf,
                cep,
                state,
                city
                }, { new: true });

                return response.status(200).json(user);
            } catch (error) {
                return response.status(400).json(error);
            }
        }

    async loginUser (request: Request, response: Response) {
        const { cpf } = request.body;

        try {
            const user = await User.findOne({ cpf });

            if (!user) {
                return response.status(400).json({ error: "User not found!" });
            }

            return response.status(200).json(user);
        } catch (error) {
            return response.status(400).json(error);
        }
    }
    
    }

export default new UserController();
