import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, FacebookAuthProvider,      } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyC5WjT_HUDGE86B92H-AaUGiWqwNnQ-yIM",
    authDomain: "triviaapp-b9a34.firebaseapp.com",
    projectId: "triviaapp-b9a34",
    storageBucket: "triviaapp-b9a34.firebasestorage.app",
    messagingSenderId: "596992040578",
    appId: "1:596992040578:web:ea8b93d4edb7ff6537de9b",
    measurementId: "G-9TTNGWK5K7"
  };

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const facebookProvider = new FacebookAuthProvider();