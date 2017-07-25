import {pairs} from 'underscore';

export default function alterValues (notes) {
    const newNotes = Object.assign({}, notes);
    const notesArr = pairs(newNotes);
    return notesArr.sort((a, b) => {
        return b[1].lastEditTime - a[1].lastEditTime;
    });
}