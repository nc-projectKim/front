import firebase, {database} from '../../FirebaseConfig';

export default function queryExpenses (query) {
        const userId = firebase.auth().currentUser.uid;
        return database.ref(`/expenses/${userId}/`)
        .once('value')
        .then(function (data) {
            const dataObj = {};
            data.forEach(function (childData) {
                const childObject = childData.val();
                let testDate;
                if (query.dateItems.from === null && query.dateItems.to === null) testDate = true;
                else {
                testDate = childObject[query.dateItems.dateChosen] >= query.dateItems.from
                && childObject[query.dateItems.dateChosen] <= query.dateItems.to;
                }
                let include = true;
                if (query.findWord !== null) {
                    const regex = new RegExp(query.findWord, 'i');
                    let testWord;
                    if (query.queryItems.chargeTo !== null) {
                        testWord = regex.test(childObject.chargeTo);
                    }
                    else {
                        testWord = regex.test(childObject.description) || 
                            regex.test(childObject.chargeTo);
                    }
                    if (!testWord) include = false;
                }
                if (include && testDate) {
                    dataObj[childData.key] = childData.val();
                }
            });
            return dataObj; 
        });
}
