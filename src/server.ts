import express from "express";
import mongoose from "mongoose";
import routes from "./routes";

const app = express();

mongoose.connect("mongodb://localhost:27017/organizyapi");

app.use(express.json());

app.use(routes);

app.listen(3333, () => console.log("Server is running!"));