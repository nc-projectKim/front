import firebase/* , /*{ facebookProvider, auth, database }*/ from '../../FirebaseConfig';
import {EDITNOTEURL} from '../../config';
import axios from 'axios';

export default function editNote (data) {
    const note = {
        title: data.title,
        text: data.text,
        tags: [...data.tags],
        userId: firebase.auth().currentUser.uid,
        noteId: data.noteId
    }; 
    console.log(note);
return axios.post(`${EDITNOTEURL}`, note)
  .then(response => {
      console.log('note edited');
      console.log('rk', response);
    })
  .catch((error) => {
    console.log(error);
  });
}