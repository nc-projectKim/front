const firebase = require('firebase');
const {CONFIG} = require('./config.js');
// import {reactReduxFirebase} from 'react-redux-firebase';
// import {compose} from 'redux';

firebase.initializeApp(CONFIG);
const auth = firebase.auth();
const facebookProvider = new firebase.auth.FacebookAuthProvider();
// const storage = firebase.storage();
const database = firebase.database();

module.exports = {firebase, auth, facebookProvider, database};
