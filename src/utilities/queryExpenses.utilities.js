const {firebase, database} = require('../../FirebaseConfig');

const query = {
    dateItems: {
        dateChosen: 'expenseDate',
        from: 1484335371000,
        to: 1501197395000
    },
    findWord: null,
    queryItems: {
        haveReceipt: null,
        chargeTo: null
    }
};

const email = 'John.Smith@google1.com';
const password = 'password123';

function queryExpenses (query) {
    firebase.auth().signInWithEmailAndPassword (email, password)
        .then((data) => {
            return database.ref(`/expenses/${data.uid}/`);
        })
        .then((expenseRef) => {
        return expenseRef.once('value');
        })
        .then(function (data) {
            const dataObj = {};
            data.forEach(function (childData) {
                const childObject = childData.val();
                const testDate = childObject[query.dateItems.dateChosen] >= query.dateItems.from
                                && childObject[query.dateItems.dateChosen] <= query.dateItems.to;
                let include = true;
                for (let key of Object.keys(query.queryItems)) {
                    if (query.queryItems[key] !== null && childObject[key] !== query.queryItems[key]) {
                        include = false;
                    }
                }
                if (query.findWord !== null) {
                    const regex = new RegExp(query.findWord, 'i');
                    const testWord = regex.test(childObject.description) || 
                            regex.test(childObject.note) ||
                            regex.test(childObject.client);
                    if (!testWord) include = false;
                }
                if (include && testDate) {
                    dataObj[childData.key] = childData.val();
                }
            });
            return dataObj; 
        })
        .then(function (obj) {
            console.log(obj);
        });
}

console.log(queryExpenses(query));