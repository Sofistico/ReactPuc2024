import firebase from "firebase/app";
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyBTI43oaSn2klpCticgFCS9RyyyxVRcKcE",
    authDomain: "pucprreact.firebaseapp.com",
    projectId: "pucprreact",
    storageBucket: "pucprreact.appspot.com",
    messagingSenderId: "832404261503",
    appId: "1:832404261503:web:060a7313b5a0ce50744d4a"
  };
  
if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig)
}

export default firebase;