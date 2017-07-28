import firebase, {database} from '../../FirebaseConfig';

export default function queryNotes (query) {
    const userId = firebase.auth().currentUser.uid;
    return database.ref(`/notes/${userId}/`).once('value')
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
            // if (!filterByTag(childObject, query)) include = false;
            if (query.findWord !== null) {
                const regex = new RegExp(query.findWord, 'i');
                let testWord = regex.test(childObject.text) ||
                    regex.test(childObject.title);
                if (childObject.tags) {
                    for (let i = 0; i < childObject.tags.length; i++) {
                        let tagTest = regex.test(childObject.tags[i]);
                        if (tagTest) testWord = true; 
                    }
                }
                if (!testWord) include = false;
                else include = true;
            }
            if (!query.findWord) include = true;
            if (include && testDate) {
                dataObj[childData.key] = childData.val();
            }
        });
        return dataObj;
    });  
}
// function filterByTag (note, query) {
//     const regexes = query.queryTags.split(', ').map((ele) => {
//         return new RegExp(ele, 'i');
//     });
//     if (note.tags) {
//         var containsAll = true;
//         for (var i = 0; i < regexes.length; i++) {
//             const filtered = note.tags.filter((ele) => {
//                 return regexes[i].test(ele);
//             }).length;
//             if (filtered === 0) {
//                 containsAll = false;
//                 break;
//             }
//         }
//         return containsAll;
//     }
//     else return false;
// }
module.exports = queryNotes;