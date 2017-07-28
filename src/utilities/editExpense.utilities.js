import firebase/* , /*{ facebookProvider, auth, database }*/ from '../../FirebaseConfig';
import { EDITEXPENSEURL } from '../../config';
import axios from 'axios';

export default function editExpense (data) {
    const receipt = data.haveReceipt === 'yes' ? true : false;
    const expense = {
        expenseDate: Number(data.expenseDate),
        currency: data.currency,
        amount: data.amount,
        chargeTo: data.chargeTo,
        description: data.description,
        haveReceipt: receipt,
        lastEditTime: Date.now(),
        userId: firebase.auth().currentUser.uid,
        expenseId: data.expenseId
    };
    return axios.post(`${EDITEXPENSEURL}`, expense)
        .then(() => {
            console.log('Expense edited');
        })
        .catch((error) => {
            console.log(error);
        });
}