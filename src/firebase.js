
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import {getAuth} from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyBCUeXrf6f-wMG8SqA6_YfE1udNNkthOAU",
    authDomain: "linkedin-clone-b1654.firebaseapp.com",
    projectId: "linkedin-clone-b1654",
    storageBucket: "linkedin-clone-b1654.appspot.com",
    messagingSenderId: "376082689992",
    appId: "1:376082689992:web:f5b7c7ca1516febadc9afd",
    measurementId: "G-6935RZQKYW"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = getAuth();

 
  export {db , auth};
