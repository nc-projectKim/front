import firebase/* , { facebookProvider, auth, database }*/ from '../../FirebaseConfig';
import {ADD_EXPENSE_URL} from '../../config';
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
    const expense = {
        created: Date.now(),
        date: data.date,
        currency: data.currency,
        amount: data.amount,
        chargeTo: data.chargeTo,
        description: data.description,
        haveReceipt: data.haveReceipt,
        lastEditTime: Date.now(), 
        userId: firebase.auth().currentUser.uid
    }; 
    console.log(ADD_EXPENSE_URL);
return axios.post(`${ADD_EXPENSE_URL}`, expense)
  .then(() => {
      console.log('expense added');
    })
  .catch((error) => {
    console.log(error);
  });
}