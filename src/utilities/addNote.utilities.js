import firebase/* , { facebookProvider, auth, database }*/ from '../../FirebaseConfig';
import {ADDNOTEURL} from '../../config';
import axios from 'axios';


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
  .then(res => {
      console.log(res);
      console.log('note added');
    })
  .catch((error) => {
    console.log(error);
  });
}