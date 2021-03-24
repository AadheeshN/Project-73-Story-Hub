import firebase from 'firebase';
require("@firebase/firestore");

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCP_wUmNl5iMyXri2FyjMeVYkJ5ADcwXYo",
  authDomain: "story-hub-e430b.firebaseapp.com",
  projectId: "story-hub-e430b",
  storageBucket: "story-hub-e430b.appspot.com",
  messagingSenderId: "1005659824151",
  appId: "1:1005659824151:web:8dd096d4406a72473ebc52"
};

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();