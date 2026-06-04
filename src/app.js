import express from "express";
import cors from "cors";
import morgan from "morgan";
import "dotenv/config";
import CommandeRoute from "./CommandeRoute.js";

const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use("/api", CommandeRoute);

export default app;
