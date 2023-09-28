import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA_A40iJ5OJLPs3HgZQtLGxuNXeq0x8XOo",
  authDomain: "react-notes-ef148.firebaseapp.com",
  projectId: "react-notes-ef148",
  storageBucket: "react-notes-ef148.appspot.com",
  messagingSenderId: "23411321037",
  appId: "1:23411321037:web:4c9bce7a1a55e2d31c2184"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export const notesCollection = collection(db, "notes");