import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB1Z5-y5Zd-xFhvonlGoJD5zJPij7RpLEA",
  authDomain: "curso-react-6ffcc.firebaseapp.com",
  projectId: "curso-react-6ffcc",
  storageBucket: "curso-react-6ffcc.appspot.com",
  messagingSenderId: "1065514658024",
  appId: "1:1065514658024:web:d5cc8274707966d3c2c15d",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);