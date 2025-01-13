
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAkwJFFHDIUFiLj60c9R1x7PogZmuqwthY",
  authDomain: "webcarros-c5b8b.firebaseapp.com",
  databaseURL: "https://webcarros-c5b8b-default-rtdb.firebaseio.com",
  projectId: "webcarros-c5b8b",
  storageBucket: "webcarros-c5b8b.appspot.com",
  messagingSenderId: "880717485089",
  appId: "1:880717485089:web:d055d3fc4e6570dbe7bf60"
};


const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp)

export { db };