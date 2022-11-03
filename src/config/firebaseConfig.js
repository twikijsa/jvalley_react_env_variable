import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
   
   // Your web app's Firebase configuration
   const firebaseConfig = {
     apiKey: import.meta.env.VITE_FB_APIKEY,
     authDomain: import.meta.env.VITE_FB_AUTHDOMAIN,
     projectId: import.meta.env.VITE_FB_PROJECTID,
     storageBucket: import.meta.env.VITE_FB_STORAGEBUCKET,
     messagingSenderId: import.meta.env.VITE_FB_MESSENDER_ID,
     appId: import.meta.env.VITE_FB_APPID
   };
   
   // Initialize Firebase
   const app = initializeApp(firebaseConfig);
   export const firestore = getFirestore(app)

 

