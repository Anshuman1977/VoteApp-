import firebase from 'firebase';

// add SDK Firebase
var firebaseConfig = {
  apiKey: "AIzaSyBeYW_wfEq8TGvhfZI97qypAbClVliT-h8",
  authDomain: "vote-8cf55.firebaseapp.com",
  databaseURL: "https://vote-8cf55-default-rtdb.firebaseio.com",
  projectId: "vote-8cf55",
  storageBucket: "vote-8cf55.appspot.com",
  messagingSenderId: "7513223191",
  appId: "1:7513223191:web:fbbac0c4984317627eec52",
  measurementId: "G-T941T4K5D3"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();