import { Request, Response } from 'express';
import User from '../database/schemas/User';
import FinancialRelease from '../database/schemas/FinancialRelease';

class FinancialReleaseController {

    async create(request: Request, response: Response) {

        const { category, description, value, date, type, fixed, paid, userId } = request.body;

        try {
            const financialRelease = await FinancialRelease.create({
                category,
                description,
                value,
                date,
                type,
                fixed,
                paid,
                userId
            });
            return response.status(201).json(financialRelease);
        } catch (error) {
            return response.status(400).json(error);
        }
    }

    async getAllFinancialReleasesByUserId(request: Request, response: Response) {
        const { id } = request.params;

        try {
            const financialReleases = await FinancialRelease.find({ userId: id });

            return response.status(200).json(financialReleases);
        } catch (error) {
            return response.status(400).json(error);
        }
    }

    async getAllFinancialReleasesOfTypeDespesaByUserId(request: Request, response: Response) {
        const { id } = request.params;

        try {
            const financialReleases = await FinancialRelease.find({ userId: id, type: "despesa" });

            return response.status(200).json(financialReleases);
        } catch (error) {
            return response.status(400).json(error);
        }
    }

    async getAllFinancialReleasesOfTypeReceitaByUserId(request: Request, response: Response) {
        const { id } = request.params;

        try {
            const financialReleases = await FinancialRelease.find({ userId: id, type: "receita" });

            return response.status(200).json(financialReleases);
        } catch (error) {
            return response.status(400).json(error);
        }
    }

    async getFinancialReleaseById(request: Request, response: Response) {
        const { id } = request.params;

        try {
            const financialRelease = await FinancialRelease.findById(id);

            return response.status(200).json(financialRelease);
        } catch (error) {
            return response.status(400).json(error);
        }
    }

    async deleteFinancialRelease(request: Request, response: Response) {
        const { id } = request.params;

        try {
            const financialRelease = await FinancialRelease.findByIdAndDelete(id);

            return response.status(200).json(financialRelease);
        } catch (error) {
            return response.status(400).json(error);
        }
    }

    async updateFinancialRelease(request: Request, response: Response) {
        const { id } = request.params;
        const { category, description, value, date, type, fixed, paid, userId } = request.body;

        try {
            const financialRelease = await FinancialRelease.findByIdAndUpdate(id, {
                category,
                description,
                value,
                date,
                type,
                fixed,
                paid,
                userId
            }, { new: true });

            return response.status(200).json(financialRelease);
        } catch (error) {
            return response.status(400).json(error);
        }
    }

    async getMonthlyBalance(request: Request, response: Response) {
        const { id } = request.params;
        // aqui é o ID do usuário
        const { month, year } = request.body;

        try {
            const financialReleases = await FinancialRelease.find({ userId: id, date: { $gte: new Date(year, month - 1, 1), $lte: new Date(year, month, 0) } });

            let totalReceita = 0;
            let totalDespesa = 0;

            financialReleases.forEach((financialRelease) => {
                if (financialRelease.type === "receita") {
                    totalReceita += financialRelease.value;
                } else {
                    totalDespesa += financialRelease.value;
                }
            });

            const balance = totalReceita - totalDespesa;

            return response.status(200).json({ totalReceita, totalDespesa, balance });
        } catch (error) {
            return response.status(400).json(error);
        }
    }

    async getAllFinancialReleasesOfTypeDespesaByUserIdAndCategory(request: Request, response: Response) {
        const { id } = request.params;
        const { category } = request.body;

        try {
            const financialReleases = await FinancialRelease.find({ userId: id, type: "despesa", category });

            return response.status(200).json(financialReleases);
        } catch (error) {
            return response.status(400).json(error);
        }
    }
}

export default new FinancialReleaseController();
