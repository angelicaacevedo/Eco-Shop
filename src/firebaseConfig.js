import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBVqVkFtiPj_bPDurHlMKYm3T6VjwHDW_s",
  authDomain: "ecoshop-web.firebaseapp.com",
  projectId: "ecoshop-web",
  storageBucket: "ecoshop-web.appspot.com",
  messagingSenderId: "491888638526",
  appId: "1:491888638526:web:9125b8848b1159b08c2f6f"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };