import { getApp, getApps, initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDFntQlZkNKANTnhew50NCxHSiw29a6zfo",
    authDomain: "chatgpt-2-521c8.firebaseapp.com",
    projectId: "chatgpt-2-521c8",
    storageBucket: "chatgpt-2-521c8.appspot.com",
    messagingSenderId: "948512375984",
    appId: "1:948512375984:web:814e78a809aeb873436775"
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig)
const db = getFirestore(app)
export { db }