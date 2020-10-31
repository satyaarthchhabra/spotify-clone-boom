import firebase from 'firebase'
const firebaseConfig = {
    apiKey: "AIzaSyBa9Hu50PperhL5dnfVlTUvCMLr9qWHdlg",
    authDomain: "spotify-clo-355de.firebaseapp.com",
    databaseURL: "https://spotify-clo-355de.firebaseio.com",
    projectId: "spotify-clo-355de",
    storageBucket: "spotify-clo-355de.appspot.com",
    messagingSenderId: "133518185478",
    appId: "1:133518185478:web:f7e3f8ef2555361d509f87",
    measurementId: "G-43T0K0HJSX"
  };
  const firebaseapp = firebase.initializeApp(firebaseConfig)
const db = firebaseapp.firestore();
const auth = firebaseapp.auth();
export { db, auth }