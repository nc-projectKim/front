import firebase/* , /*{ facebookProvider, auth, database }*/ from '../../FirebaseConfig';
import { EDITEXPENSEURL } from '../../config';
import axios from 'axios';

<<<<<<< HEAD
export default function editExpense (data) {
=======
export default function editExpense(data) {
>>>>>>> 1a2e3071f7659ca583a4e4dfe5ae4dcfb8083756
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
    console.log('ut', expense);
    return axios.post(`${EDITEXPENSEURL}`, expense)
        .then((response) => {
            console.log('expense edited');
            console.log('rk', response);
        })
        .catch((error) => {
            console.log(error);
        });
}