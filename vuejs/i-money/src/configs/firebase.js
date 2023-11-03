import { initializeApp } from "firebase/app";
import "firebase/firestore";
import { getFirestore, serverTimestamp } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC0M5DdaUHemj2Cwe9M-6iwelcCRtREB_k",
  authDomain: "imoney-21b0a.firebaseapp.com",
  projectId: "imoney-21b0a",
  storageBucket: "imoney-21b0a.appspot.com",
  messagingSenderId: "563913873614",
  appId: "1:563913873614:web:cc3854c0d6e2e7a486989f",
  measurementId: "G-M7DSCLJ6X9",
};

const app = initializeApp(firebaseConfig);

const fireStore = getFirestore(app);
const fireAuth = getAuth();
const timestamp = serverTimestamp();

// const getDb = async (clt) => {
//   const col = collection(fireStore, clt);
//   const snapshot = await getDocs(col);
//   const data = snapshot.docs.map((doc) => {
//     return { ...doc.data(), id: doc.id };
//   });
//   return data;
// };

export { fireStore, fireAuth, timestamp };
