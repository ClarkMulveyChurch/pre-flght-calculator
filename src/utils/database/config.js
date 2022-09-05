import { initializeApp } from "firebase/app";
import { getDatabase, get, ref, set } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCgYug9ANx1mY4LYM7GrA1cLHIjAW_kLSo",
  authDomain: "pre-flight-calculator.firebaseapp.com",
  databaseURL: "https://pre-flight-calculator-default-rtdb.firebaseio.com",
  projectId: "pre-flight-calculator",
  storageBucket: "pre-flight-calculator.appspot.com",
  messagingSenderId: "749574061267",
  appId: "1:749574061267:web:10982520759fe5bd7a2826",
  measurementId: "G-ZVBQNP1Q25"
};

const app = initializeApp(firebaseConfig);

export default app;