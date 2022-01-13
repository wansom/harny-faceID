import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';


// firebase init - add your own config here
const firebaseConfig = {
    apiKey: "AIzaSyDaS35whZC6GUngdepTja5c4RJRy_y7EJQ",
  authDomain: "getate-9b5b1.firebaseapp.com",
  databaseURL: "https://getate-9b5b1.firebaseio.com",
  projectId: "getate-9b5b1",
  storageBucket: "getate-9b5b1.appspot.com",
  messagingSenderId: "270606729908",
  appId: "1:270606729908:web:01fe12cee8e5c89d600de1",
  measurementId: "G-YJK36S403F"
};
firebase.initializeApp(firebaseConfig);

// utils
const db = firebase.firestore();
const auth = firebase.auth();
const storage = firebase.storage();
const types = firebase.firestore;

const images = firebase.firestore.FieldValue.arrayUnion();

// collection references
const usersCollection = db.collection("users");
const businessCollection = db.collection("business");
const partnersCollection = db.collection("partners");

// export utils/refs

export {
  db,
  auth,
  storage,
  types,
  images,
  usersCollection,
  businessCollection,
  partnersCollection,
};