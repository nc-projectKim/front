import firebase, {database} from '../../FirebaseConfig';

export default function deleteExpense (expenseId) {
    const userId = firebase.auth().currentUser.uid;
    const expenseRef = database.ref(`/expenses/${userId}/${noteId}`);
    return expenseRef.remove()
    .then(() => {
        console.log('expense deleted');
    })
        .catch(err => {
        console.log(err);
    });
}