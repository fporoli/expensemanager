import express, { Express, Request, Response } from "express";
import expRouter from "./routes/expenseRoute";

const app: Express = express();
const port = process.env.PORT || 5000;

app.use("/expenses", expRouter);

app.get("/", async (req: Request, res: Response) => {
    res.status(200).send("Hello...");
});

app.listen(port, () => {
    console.log(`Expense Manager Server started on http://localhost:${port}`);
});
