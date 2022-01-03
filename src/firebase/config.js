// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDNiaonizPgGhe-Ty76J7iRFjTPEo6avFE",
    authDomain: "react-gallery-e4b80.firebaseapp.com",
    projectId: "react-gallery-e4b80",
    storageBucket: "react-gallery-e4b80.appspot.com",
    messagingSenderId: "118632228983",
    appId: "1:118632228983:web:9a88138732768683a93e72"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();
const projectStorage = getStorage(app);

export { projectStorage, db }