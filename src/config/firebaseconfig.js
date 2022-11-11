// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAQzmwKBvmISl7FL3dU4-1i0QdZnAwYB_U",
  authDomain: "todo-firebase-database-459f6.firebaseapp.com",
  projectId: "todo-firebase-database-459f6",
  storageBucket: "todo-firebase-database-459f6.appspot.com",
  messagingSenderId: "275295869416",
  appId: "1:275295869416:web:01a48683d1866ca48cec5d",
  measurementId: "G-BZS6WZCWSY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


export default app;