'use client';
import { getAuth } from "@firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyA_Bg0LlczemvAFt_VUxNBXFIflNqZyA_k",
  authDomain: "deshifood-9dbf0.firebaseapp.com",
  projectId: "deshifood-9dbf0",
  storageBucket: "deshifood-9dbf0.appspot.com",
  messagingSenderId: "987210427909",
  appId: "1:987210427909:web:9c56653c992f904dc7f66c"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;