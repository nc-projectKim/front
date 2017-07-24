import firebase, { facebookProvider, auth, database } from '../../FirebaseConfig';
import {EDITNOTEURL} from '../../config';
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


export default function editNote (data) {
    const note = {
        title: data.title,
        text: data.text,
        tags: [...data.tags],
        userId: firebase.auth().currentUser.uid,
        noteId: data.noteId
    }; 
return axios.put(`${EDITNOTEURL}`, note)
  .then((response) => {
      ('rk', response);
    })
  .catch((error) => {
    console.log(error);
  });
}