import firebase from 'firebase';

// add SDK Firebase
var firebaseConfig = {
  apiKey: "AIzaSyDObeReVZv5_Jj5lLjKFcP1TO_zGsTeLWQ",
  authDomain: "team-voting-app-f4dc1.firebaseapp.com",
  projectId: "team-voting-app-f4dc1",
  storageBucket: "team-voting-app-f4dc1.appspot.com",
  messagingSenderId: "857202256244",
  appId: "1:857202256244:web:deae6c6ea372dbd77d2421",
  measurementId: "G-SNH1HB6GKH"
};


firebase.initializeApp(firebaseConfig);



export default firebase.database();