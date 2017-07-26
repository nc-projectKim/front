import firebase/* , /*{ facebookProvider, auth, database }*/ from '../../FirebaseConfig';
import { EDITEXPENSEURL } from '../../config';
import axios from 'axios';

export default function editExpense(data) {
    const expense = {
        date: data.date,
        currency: data.currency,
        amount: data.amount,
        chargeTo: data.chargeTo,
        description: data.description,
        haveReceipt: data.haveReceipt,
        userId: firebase.auth().currentUser.uid,
        expenseId: data.expenseId
    };
    console.log(expense);
    return axios.post(`${EDITEXPENSEURL}`, expense)
        .then((response) => {
            console.log('expense edited');
            console.log('rk', response);
        })
        .catch((error) => {
            console.log(error);
        });
}