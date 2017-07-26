import firebase from '../../FirebaseConfig';

export default function getAllExpenses () {
var userId = firebase.auth().currentUser.uid;
return firebase.database().ref('/expenses/' + userId).once('value').then(function (snapshot) {
    return snapshot.val();
}).catch(function (error) {
    console.log(error);
});

}