import Firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const config = {
  apiKey: "AIzaSyC0AWfsJC8ki8HKb4d2aM5vPz-z6kMsHag",
  authDomain: "talgagram.firebaseapp.com",
  projectId: "talgagram",
  storageBucket: "talgagram.appspot.com",
  messagingSenderId: "845806347368",
  appId: "1:845806347368:web:cb101f68ab4c1aa66887dd",
};
export const firebase = Firebase.initializeApp(config);
export const { FieldValue } = Firebase.firestore;
