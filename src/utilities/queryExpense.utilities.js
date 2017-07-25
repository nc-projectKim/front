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
                for (let key of Object.keys(query.queryItems)) {
                    if (query.queryItems[key] !== null && childObject[key] !== query.queryItems[key]) {
                        include = false;
                    }
                }
                if (query.findWord !== null) {
                    const regex = new RegExp(query.findWord, 'i');
                    console.log('desc', regex.test(childObject.description));
                    console.log('client', regex.test(childObject.chargeTo));
                    const testWord = regex.test(childObject.description) || 
                            // regex.test(childObject.note) ||
                            regex.test(childObject.chargeTo);
                    console.log('tw', testWord);
                    if (!testWord) include = false;
                }
                console.log(include, testDate);
                if (include && testDate) {
                    dataObj[childData.key] = childData.val();
                }
            });
            console.log('do', dataObj);
            return dataObj; 
        });
}
