import firebase from 'firebase';
import firestore from 'firebase/firestore';

// Your web app's Firebase configuration
var config = {
  apiKey: 'AIzaSyBN42idTouoKRXdfQFsyjROqBb50LExz9w',
  authDomain: 'ninja-smoothies-f65b5.firebaseapp.com',
  databaseURL: 'https://ninja-smoothies-f65b5.firebaseio.com',
  projectId: 'ninja-smoothies-f65b5',
  storageBucket: 'ninja-smoothies-f65b5.appspot.com',
  messagingSenderId: '259407841995',
  appId: '1:259407841995:web:17cdc587be6c1425'
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(config);
firebaseApp.firestore().settings({
  timestampsInSnapshots: true
});

export default firebaseApp.firestore();
