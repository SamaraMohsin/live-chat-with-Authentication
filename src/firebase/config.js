import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCf8ehs_oHZVaYwiLElDQshFeo8M66O3mw",
    authDomain: "udemy-vue-firebase-sites-48291.firebaseapp.com",
    projectId: "udemy-vue-firebase-sites-48291",
    storageBucket: "udemy-vue-firebase-sites-48291.appspot.com",
    messagingSenderId: "285841497593",
    appId: "1:285841497593:web:adcab100644dfceba8f128"
  };
  // init firebase
firebase.initializeApp(firebaseConfig)

const projectFirestore = firebase.firestore()
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { projectFirestore, timestamp }