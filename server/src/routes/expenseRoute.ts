import express, { Request, Response } from "express";
import { getExpenses } from "../models/expenseDataStore";

const expRouter = express.Router();

expRouter.get("/", async (req: Request, res: Response) => {
    res.status(200).send(getExpenses());
});

export default expRouter;
