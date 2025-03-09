import firebase from "firebase/compat/app";
import { getAuth } from "firebase/auth"
import "firebase/compat/firestore"
import "firebase/compat/auth"


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDvguYw_e105RiKPZVg44f43-Vi9S1VzVM",
  authDomain: "clone-e3984.firebaseapp.com",
  projectId: "clone-e3984",
  storageBucket: "clone-e3984.firebasestorage.app",
  messagingSenderId: "652027688709",
  appId: "1:652027688709:web:92dc13295173d5b4cda96c",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = app.firestore();
