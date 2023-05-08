import { Router } from "express";
import UserController from "./controller/UserController";
import FinancialReleaseController from "./controller/FinancialReleaseController";

const routes = Router();

routes.post("/user", UserController.create);
routes.get("/users", UserController.getUsers);
routes.get("/user/:id", UserController.getUser);
routes.delete("/user/:id", UserController.deleteUser);
routes.put("/user/:id", UserController.updateUser);
routes.post("/user/login", UserController.loginUser);

routes.post("/financial-release", FinancialReleaseController.create);
routes.get("/financial-releases/:id", FinancialReleaseController.getFinancialReleaseById);
routes.get("/financial-release/user/:id", FinancialReleaseController.getAllFinancialReleasesByUserId);
routes.get("/financial-release/despesa/:id", FinancialReleaseController.getAllFinancialReleasesOfTypeDespesaByUserId);
routes.get("/financial-release/receita/:id", FinancialReleaseController.getAllFinancialReleasesOfTypeReceitaByUserId);
routes.delete("/financial-release/:id", FinancialReleaseController.deleteFinancialRelease);
routes.put("/financial-release/:id", FinancialReleaseController.updateFinancialRelease);
routes.get("/financial-release/monthly-balance/:id", FinancialReleaseController.getMonthlyBalance);
routes.get("/financial-release/despesa/category/:id", FinancialReleaseController.getAllFinancialReleasesOfTypeDespesaByUserIdAndCategory);

export default routes;