// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCxE2apY1wG-aJWk8z9F6kZNztO-H5cn8c",
  authDomain: "acad-direct.firebaseapp.com",
  projectId: "acad-direct",
  storageBucket: "acad-direct.appspot.com",
  messagingSenderId: "518767586824",
  appId: "1:518767586824:web:bb8169d6ef1fba33e66bbd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);