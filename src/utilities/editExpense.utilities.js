import firebase/* , /*{ facebookProvider, auth, database }*/ from '../../FirebaseConfig';
import { EDITEXPENSEURL } from '../../config';
import axios from 'axios';

export default function editExpense(data) {
    const expense = {
        expenseDate: data.expenseDate,
        currency: data.currency,
        amount: data.amount,
        chargeTo: data.chargeTo,
        description: data.description,
        haveReceipt: data.haveReceipt,
        lastEditTime: Date.now(),
        userId: firebase.auth().currentUser.uid,
        expenseId: data.expenseId
    };
    console.log('ut', expense);
    // return axios.post(`${EDITEXPENSEURL}`, expense)
    //     .then((response) => {
    //         console.log('expense edited');
    //         console.log('rk', response);
    //     })
    //     .catch((error) => {
    //         console.log(error);
    //     });
}