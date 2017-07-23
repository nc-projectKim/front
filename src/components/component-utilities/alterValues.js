import {values} from 'underscore';

export default function alterValues (notes) {
    const notesArr = values(notes);
    return notesArr.sort((a, b) => {
        return b.lastEditTime - a.lastEditTime;
    });
}