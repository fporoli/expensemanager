import express, { Express } from "express";


const app: Express = express();
const port = process.env.PORT || 5000;


app.listen(port, () => {
    console.log(`Expense Manager Server started on http://localhost:${port}`);
});
