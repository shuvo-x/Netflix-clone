import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBgiMCNRyq6g81ykh1qaJz9G0SMiprfWyw",
  authDomain: "netflix-clone-4f657.firebaseapp.com",
  projectId: "netflix-clone-4f657",
  storageBucket: "netflix-clone-4f657.appspot.com",
  messagingSenderId: "671072512446",
  appId: "1:671072512446:web:9c67e5d897d1594a71f1ef",
  measurementId: "G-DWCQ13W1KH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);