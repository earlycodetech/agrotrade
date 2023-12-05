import { initializeApp,getApp,getApps } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAfVkjHaBizRhGz36jTNTpfILc51C2O_Q4",
    authDomain: "citric-aleph-406815.firebaseapp.com",
    projectId: "citric-aleph-406815",
    storageBucket: "citric-aleph-406815.appspot.com",
    messagingSenderId: "63915610308",
    appId: "1:63915610308:web:0bcdf72f983a9d8fc73991"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore(app);
const storage = getStorage(app);

export { db,storage }