import firebase/* , { facebookProvider, auth, database }*/ from '../../FirebaseConfig';
import {ADDEXPENSEURL} from '../../config';
import axios from 'axios';

// export default function addNote (data) {
//     const note = {
//         created: Date.now(),
//         title: data.title,
//         text: data.text,
//         tags: [...data.tags],
//         lastEditTime: Date.now()
//     };
//     const userId = firebase.auth().currentUser.uid;
//     const notesRef = database.ref(`/notes/${userId}`);
//     return notesRef.push(note)
//         .then(res => {
//             note.key = res.key;
//         })
//         .catch(err => {
//             console.log(err);
//         });
// }

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