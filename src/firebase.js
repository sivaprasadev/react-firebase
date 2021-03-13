import firebase from "firebase";

// Web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDrc45U4mmEL6l9DqEK7WyCSk-7TmnoJRg",
  authDomain: "react-firebase-b1fa8.firebaseapp.com",
  projectId: "react-firebase-b1fa8",
  storageBucket: "react-firebase-b1fa8.appspot.com",
  messagingSenderId: "762648960445",
  appId: "1:762648960445:web:8bc8fea0ad8f9c90cf46d4",
};
// Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);

export default fire;
