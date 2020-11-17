// Your web app's Firebase configuration
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';

var firebaseConfig = {
  apiKey: "AIzaSyCOd47-62ZZkVGc3JwU6dP8wCrGeSWiAGU",
  authDomain: "foodgram-8dac2.firebaseapp.com",
  databaseURL: "https://foodgram-8dac2.firebaseio.com",
  projectId: "foodgram-8dac2",
  storageBucket: "foodgram-8dac2.appspot.com",
  messagingSenderId: "238954807478",
  appId: "1:238954807478:web:34fc59dcc3133d0d0d2617",
  measurementId: "G-LK4JFLL22E"
};

  // Initialize Firebase

firebase.initializeApp(firebaseConfig);

// initialize firestore


// intializes firebase storage 
const storage = firebase.storage(); 

export { storage, firebase as default }

