// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBOardmuQANC8mD56pf8VruaN4PT0obSiU",
  authDomain: "my-portfolio-cd6e9.firebaseapp.com",
  projectId: "my-portfolio-cd6e9",
  storageBucket: "my-portfolio-cd6e9.appspot.com",
  messagingSenderId: "317423442195",
  appId: "1:317423442195:web:3dad8a50fee608ebaf22e6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;