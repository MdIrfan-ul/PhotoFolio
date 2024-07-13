// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: process.env.APIKEY,
//   authDomain: process.env.AUTH_DOMAIN,
//   projectId: process.env.PROJECT_ID,
//   storageBucket: process.env.STORAGE_BUCKET,
//   messagingSenderId: process.env.MSG_SENDER_ID,
//   appId: process.env.APP_ID
// };
const firebaseConfig = {
  apiKey: "AIzaSyBBUzVlF6NwIFpXoh8MvGSs8YiSszBEpbg",
  authDomain: "photofolio-657bf.firebaseapp.com",
  projectId: "photofolio-657bf",
  storageBucket: "photofolio-657bf.appspot.com",
  messagingSenderId: "190579315206",
  appId: "1:190579315206:web:c453b1344d9526112fa987"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {db};