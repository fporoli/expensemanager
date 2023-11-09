import express, { Express, Request, Response } from "express";
import expRouter from "./routes/expenseRoute";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 5000;

app.use("/expenses", expRouter);

app.use(cors());
app.use(express.json());

app.listen(port, () => {
    console.log(`Expense Manager Server started on http://localhost:${port}`);
});
