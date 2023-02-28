import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import axios from "axios";

// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_HW_API_KEY,
//   authDomain: process.env.REACT_APP_HW_AUTH_DOMAIN,
//   databaseURL: process.env.REACT_APP_HW_DATABASE_URL,
//   projectId: process.env.REACT_APP_HW_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_HW_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_HW_MESSAGE_SENDER_ID,
//   appId: process.env.REACT_APP_HW_APP_ID,
//   measurementId: process.env.REACT_APP_HW_MEASUREMENT_ID
// };

// colavo project
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FB_API_KEY,
  authDomain: process.env.REACT_APP_FB_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FB_DATABASE_URL,
  projectId: process.env.REACT_APP_FB_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FB_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FB_MESSAGE_SENDER_ID,
  appId: process.env.REACT_APP_FB_APP_ID,
  measurementId: process.env.REACT_APP_FB_MEASUREMENT_ID,
};

// const app = initializeApp(firebaseConfig);
initializeApp(firebaseConfig);
export const auth = getAuth();

export const createUserWithEmail = (email: string, password: string) => {
  return createUserWithEmailAndPassword(auth, email, password);
};

export const handleTestIDP = async () => {
  const emailResponse = await axios({
    method: "post",
    url: `https://identitytoolkit.googleapis.com/v1/accounts:createAuthUri?key=${process.env.REACT_APP_FB_API_KEY}`,
    data: {
      identifier: `${process.env.REACT_APP_FB_EMAIL}`,
      continueUri: "http://localhost:3001",
      providerId: "facebook.com",
    },
  });
  console.log(emailResponse.data);
};
