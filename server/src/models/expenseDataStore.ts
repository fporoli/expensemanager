import Expense from "./expense";

const DemoExpenses: Expense[] = [
    { id: 11, amount: 110, category: 8, description: "Test Data 11" },
    { id: 22, amount: 220, category: 7, description: "Test Data 22" },
    { id: 33, amount: 330, category: 9, description: "Test Data 33" },
    { id: 44, amount: 440, category: 7, description: "Test Data 44" },
];

let expenses: Expense[] = [...DemoExpenses];

export function getExpenses(): Expense[] {
    return expenses;
}
