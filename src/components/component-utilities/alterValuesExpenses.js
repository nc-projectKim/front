import {pairs} from 'underscore';


export default function alterValuesExpenses (expenses) {
    const newExpenses = Object.assign({}, expenses);
    const expensesArr = pairs(newExpenses);
    return expensesArr.sort((a, b) => {
        return b[1].expenseDate - a[1].expenseDate;
    });
}