// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBGA89REw7DzB_y77E2jbrqsAku-DMaBsg",
  authDomain: "league-app-91296.firebaseapp.com",
  projectId: "league-app-91296",
  storageBucket: "league-app-91296.appspot.com",
  messagingSenderId: "1050670407772",
  appId: "1:1050670407772:web:0f5bc7c80fe64beae4c699"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);