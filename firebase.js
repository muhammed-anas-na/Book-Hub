// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDNXAGUL12_XJMAz1Ag3UKnlsbd_gMVdSI",
  authDomain: "book-hub-1814d.firebaseapp.com",
  projectId: "book-hub-1814d",
  storageBucket: "book-hub-1814d.appspot.com",
  messagingSenderId: "634882168297",
  appId: "1:634882168297:web:74037be0ef12026b2ba778",
  measurementId: "G-QZNTEER2BD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export { auth, provider, signInWithPopup };
