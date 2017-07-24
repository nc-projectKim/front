import firebase, { facebookProvider, auth, database } from '../../FirebaseConfig';
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
        lastEditTime: Date.now()
    };
    const userId = firebase.auth().currentUser.uid;

axios.post('https://us-central1-project-kim-6b8cc.cloudfunctions.net/noteHTTPValidation', note)
  .then((response) => {
      console.log(response)
    })
    
  .catch((error) => {
    console.log(error);
  });
}