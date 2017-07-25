import firebase/* , { facebookProvider, auth, database }*/ from '../../FirebaseConfig';
import {ADDEXPENSEURL} from '../../config';
import axios from 'axios';

export default function addExpense (data) {
  const receipt = data.haveReceipt === 'yes' ? true : false;
    const expense = {
        created: Date.now(),
        expenseDate: data.date,
        amount: data.amount,
        currency: data.currency,
        chargeTo: data.chargeTo,
        description: data.description,
        lastEditTime: Date.now(), 
        haveReceipt: receipt,
        userId: firebase.auth().currentUser.uid
    }; 
    console.log(ADDEXPENSEURL);
return axios.post(`${ADDEXPENSEURL}`, expense)
  .then((res) => {
      console.log('r', res);
      console.log('expense added');
    })
  .catch((error) => {
    console.log(error);
  });
}