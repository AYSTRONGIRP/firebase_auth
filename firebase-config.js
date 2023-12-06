import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAEqh2U89uBUXGs3NgFrEYc32FXsQGNWdc",
  authDomain: "react-auth-aea7d.firebaseapp.com",
  projectId: "react-auth-aea7d",
  storageBucket: "react-auth-aea7d.appspot.com",
  messagingSenderId: "257118624921",
  appId: "1:257118624921:web:52a669d893df0e94106c08",
  measurementId: "G-MQP2Y8HYDJ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
