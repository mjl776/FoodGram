// Your web app's Firebase configuration
import firebase from 'firebase'
import firestore from 'firebase/firestore'

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
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  firebase.analytics();

export default firebaseApp.firestore();