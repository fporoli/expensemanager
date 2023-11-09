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

export function find(id: number) {
    return expenses.find((x) => x.id == id);
}

function findFreeId(): number {
    return Math.max(...expenses.map(o => o.id)) + 1;
}

export function create(newExpense: Expense): Expense {
    const idx = expenses.length;
    const key = findFreeId();
    expenses[idx] = {
        ...newExpense,
        id: key,
    };
    return expenses[idx];
}

export function update(id: number,
    expenseUpdate: Expense): Expense {
    const idx = expenses.findIndex((x) => x.id === id);
    expenses[idx] = { ...expenseUpdate };
    return expenses[idx];
}

export function remove(id: number): void {
    expenses = expenses.filter((e) => e.id !== id);
}

export function reset(): void {
    expenses = [...DemoExpenses];
}
