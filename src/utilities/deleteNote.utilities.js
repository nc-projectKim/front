import firebase, {database} from '../../FirebaseConfig';

export default function deleteNote (noteId) {
    const userId = firebase.auth().currentUser.uid;
    const noteRef = database.ref(`/notes/${userId}/${noteId}`);
    return noteRef.remove()
    .then(() => {
        console.log('note deleted');
    })
        .catch(err => {
        console.log(err);
    });
}