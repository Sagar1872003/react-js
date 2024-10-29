// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCwbQNxLpuIEkFZzaFbG7CAXJzuumHfaao",
  authDomain: "realtime-firebase-32c3a.firebaseapp.com",
  projectId: "realtime-firebase-32c3a",
  storageBucket: "realtime-firebase-32c3a.appspot.com",
  messagingSenderId: "603633147664",
  appId: "1:603633147664:web:e85446a8411faeea104f95",
  measurementId: "G-334VSL3XEN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);