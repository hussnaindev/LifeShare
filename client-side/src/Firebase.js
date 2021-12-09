// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBIEpWniHdB0gjvCZ4NJjMCMH8Ep1NJJtg",
  authDomain: "lifeshare-uet.firebaseapp.com",
  projectId: "lifeshare-uet",
  storageBucket: "lifeshare-uet.appspot.com",
  messagingSenderId: "731471044357",
  appId: "1:731471044357:web:102295d2107b0daf5ba16c",
};

const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);

export default auth;