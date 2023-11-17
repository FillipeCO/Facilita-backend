import express from "express";
import mongoose from "mongoose";
import routes from "./routes";
import cors from "cors";

const app = express();

app.use(cors());

mongoose.connect("mongodb://localhost:27017/facilita_api");

app.use(express.json());

app.use(routes);

app.listen(3333, () => console.log("Server is running at port 3333!"));