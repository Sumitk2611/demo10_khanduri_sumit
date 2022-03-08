//----------------------------------------
//  Your web app's Firebase configuration
//----------------------------------------
var firebaseConfig = {
    apiKey: "AIzaSyCufb_kw0ht6MyUwUSoNpDdACqlGUYFJYk",
  authDomain: "fir-comp1800-219ce.firebaseapp.com",
  projectId: "fir-comp1800-219ce",
  storageBucket: "fir-comp1800-219ce.appspot.com",
  messagingSenderId: "920526734130",
  appId: "1:920526734130:web:d92fb6d0e1aa333c010d2b"
};

//--------------------------------------------
// initialize the Firebase app
// initialize Firestore database if using it
//--------------------------------------------
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
