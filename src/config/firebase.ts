import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth"

const firebaseConfig = {
  apiKey: process.env.REACT_APP_HW_API_KEY,
  authDomain: process.env.REACT_APP_HW_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_HW_DATABASE_URL,
  projectId: process.env.REACT_APP_HW_PROJECT_ID,
  storageBucket: process.env.REACT_APP_HW_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_HW_MESSAGE_SENDER_ID,
  appId: process.env.REACT_APP_HW_APP_ID,
  measurementId: process.env.REACT_APP_HW_MEASUREMENT_ID
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth()

export const createUserWithEmail = (email: string, password: string) => {
  return createUserWithEmailAndPassword(auth, email, password)
}
