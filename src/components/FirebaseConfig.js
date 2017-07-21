import firebase from 'firebase';
import {CONFIG} from '../../config.js';
// import {reactReduxFirebase} from 'react-redux-firebase';
// import {compose} from 'redux';

firebase.initializeApp(CONFIG);

export default firebase;

export const auth = firebase.auth();
export const facebookProvider = new firebase.auth.FacebookAuthProvider();
export const storage = firebase.storage();
export const database = firebase.database();