import { initializeApp } from "firebase/app";
import { GoogleAuthProvider , getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDQ2zxSJKRLaWMuM6Iiynkwy2SKWopf6Fw",
  authDomain: "fir-realtime-database-d4f96.firebaseapp.com",
  projectId: "fir-realtime-database-d4f96",
  storageBucket: "fir-realtime-database-d4f96.appspot.com",
  messagingSenderId: "185071811804",
  appId: "1:185071811804:web:335427b58a705d2aabc819"
};

const app = initializeApp(firebaseConfig);

export const googleAuthProvider = new GoogleAuthProvider();
export const auth = getAuth();
export default app;