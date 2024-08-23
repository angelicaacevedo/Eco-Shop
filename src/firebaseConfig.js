import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBVqVkFtiPj_bPDurHlMKYm3T6VjwHDW_s",
  authDomain: "ecoshop-web.firebaseapp.com",
  projectId: "ecoshop-web",
  storageBucket: "ecoshop-web.appspot.com",
  messagingSenderId: "491888638526",
  appId: "1:491888638526:web:9125b8848b1159b08c2f6f"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const db = firebase.firestore();
const auth = firebase.auth();

export { db, auth };