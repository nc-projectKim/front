import firebase, {database} from '../../FirebaseConfig';

export default function deleteExpense (expenseId) {
    const userId = firebase.auth().currentUser.uid;
    const expenseRef = database.ref(`/expenses/${userId}/${expenseId}`);
    return expenseRef.remove()
    .then((res) => {
        console.log('res', res);
        console.log('expense deleted');
    })
        .catch(err => {
        console.log(err);
    });
}