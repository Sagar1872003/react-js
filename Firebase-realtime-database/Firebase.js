
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCwbQNxLpuIEkFZzaFbG7CAXJzuumHfaao",
  authDomain: "realtime-firebase-32c3a.firebaseapp.com",
  projectId: "realtime-firebase-32c3a",
  storageBucket: "realtime-firebase-32c3a.appspot.com",
  messagingSenderId: "603633147664",
  appId: "1:603633147664:web:e85446a8411faeea104f95",
  measurementId: "G-334VSL3XEN"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);