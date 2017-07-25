import firebase/* , { facebookProvider, auth, database }*/ from '../../FirebaseConfig';
import {ADDNOTEURL} from '../../config';
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

export default function addNote (data) {
    const note = {
        created: Date.now(),
        title: data.title,
        text: data.text,
        tags: [...data.tags],
        lastEditTime: Date.now(), 
        userId: firebase.auth().currentUser.uid
    }; 
    console.log(note);
return axios.post(`${ADDNOTEURL}`, note)
  .then((res) => {
      console.log(res);
      console.log('note edited');
    })
  .catch((error) => {
    console.log(error);
  });
}