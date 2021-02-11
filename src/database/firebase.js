
import firebase from 'firebase';
  const  firebaseConfig = {
    apiKey: "AIzaSyC8G3sNnsEDlIlulfphDvSjqnCh7mXjCZU",
    authDomain: "crud-react-tips-code.firebaseapp.com",
    projectId: "crud-react-tips-code",
    storageBucket: "crud-react-tips-code.appspot.com",
    messagingSenderId: "14579688435",
    appId: "1:14579688435:web:faec58aa04e99119a16886"
  };

  let fireDb = firebase.initializeApp(firebaseConfig);


  export default fireDb.database().ref();