// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDVXqLatNnKjzMOlXslD68zngp-TSMWdlQ",
    authDomain: "lifeshare-org.firebaseapp.com",
    projectId: "lifeshare-org",
    storageBucket: "lifeshare-org.appspot.com",
    messagingSenderId: "767121092861",
    appId: "1:767121092861:web:30e4c9eb8c76e5eabbce94",
    measurementId: "${config.measurementId}"
};

const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);
const firestore = getFirestore(firebaseApp);

export {auth, firestore};
