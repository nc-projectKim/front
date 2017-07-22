import firebase, { facebookProvider, auth, database } from '../../FirebaseConfig';

export default function addNote (data) {
    const note = {
        created: Date.now(),
        title: data.title,
        text: data.text,
        tags: [...data.tags],
        lastEditTime: Date.now()
    };
    const userId = firebase.auth().currentUser.uid;
    const notesRef = database.ref(`/notes/${userId}`);
    return notesRef.push(note)
        .then(res => {
            note.key = res.key;
        })
        .catch(err => {
            console.log(err);
        });
}