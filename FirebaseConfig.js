import firebase from 'firebase';
import {CONFIG} from './config.js';

firebase.initializeApp(CONFIG);

export default firebase;

export const auth = firebase.auth();
export const facebookProvider = new firebase.auth.FacebookAuthProvider();
export const database = firebase.database();