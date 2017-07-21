import firebase from '../components/FirebaseConfig';

export default function getAllNotes () {
var userId = firebase.auth().currentUser.uid;
return firebase.database().ref('/notes/' + userId).once('value').then(function (snapshot) {
    return snapshot.val();
}).catch(function (error) {
    console.log(error);
});

}
