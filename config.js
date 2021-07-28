import firebase from 'firebase';

 var firebaseConfig = {
    apiKey: "AIzaSyCF4HKp0jDhKdWSE9Q0CKWDHOQYCB6namk",
    authDomain: "classroom-188df.firebaseapp.com",
    projectId: "classroom-188df",
    storageBucket: "classroom-188df.appspot.com",
    messagingSenderId: "613849331095",
    appId: "1:613849331095:web:48ba2e37c366a16ef040d2"
  };

if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
}

export default firebase.database()