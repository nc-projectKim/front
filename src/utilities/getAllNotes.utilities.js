import firebase from '../../FirebaseConfig';

export default function getAllNotes () {
var userId = firebase.auth().currentUser.uid;
console.log(userId);
return firebase.database().ref('/notes/' + userId).once('value').then(function (snapshot) {
    console.log('got notes', snapshot);
    return snapshot.val();
}).catch(function (error) {
    console.log(error);
});

}
