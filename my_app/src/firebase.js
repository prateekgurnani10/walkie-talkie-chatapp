import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyB2Ur_kcNE5whS47LHyL1NRphufJ47L2U8",
  authDomain: "chatapp-23d6c.firebaseapp.com",
  databaseURL: "https://chatapp-23d6c.firebaseio.com",
  projectId: "chatapp-23d6c",
  storageBucket: "chatapp-23d6c.appspot.com",
  messagingSenderId: "676721860529",
  appId: "1:676721860529:web:4bc0cc16b50985bc1b2790",
  measurementId: "G-W2NFEKCGB3"
};


firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();
export const auth  = firebase.auth();
export const storage = firebase.storage();
