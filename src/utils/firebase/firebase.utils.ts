import {initializeApp} from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBGdZwLRGf8mzuYJYYVty2Gh8WqdFol6SA",
  authDomain: "crwn-clothing-db-cc026.firebaseapp.com",
  projectId: "crwn-clothing-db-cc026",
  storageBucket: "crwn-clothing-db-cc026.appspot.com",
  messagingSenderId: "641101831670",
  appId: "1:641101831670:web:426c5f862859b4e70e7bd7",
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
