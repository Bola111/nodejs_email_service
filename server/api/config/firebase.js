import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/storage";
import "firebase/firestore";

const config = {
    apiKey: "AIzaSyAY5FFi62u3gtdqfaFbg2nTmifNTYJjm1s",
    authDomain: "invests-f6006.firebaseapp.com",
    projectId: "invests-f6006",
    storageBucket: "invests-f6006.appspot.com",
    messagingSenderId: "684334408066",
    appId: "1:684334408066:web:4feb97f52e9a44d8376f9b",
    measurementId: "G-NGD9EZPQ8T"
};

firebase.initializeApp(config);

export const ref = firebase.database().ref();
export const firebaseAuth = firebase.auth;
export default {
  database: firebase.firestore(),
  auth: firebase.auth(),
  storage: firebase.storage(),
};