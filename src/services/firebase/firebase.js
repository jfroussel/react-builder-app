
import firebase from 'firebase'

const config = {
    apiKey: "AIzaSyDt7JtdnDDaULZNYhuvSBaUWWROBzRSG0U",
    authDomain: "react-builder-app-1a4cb.firebaseapp.com",
    databaseURL: "https://react-builder-app-1a4cb.firebaseio.com",
    projectId: "react-builder-app-1a4cb",
    storageBucket: "react-builder-app-1a4cb.appspot.com",
    messagingSenderId: "337903726562",
    appId: "1:337903726562:web:e648e455317c67792553bb",
    measurementId: "G-8TDYPP27KG"
  };

firebase.initializeApp(config)
const auth = firebase.auth()
const db = firebase.firestore()



function signup(email, password) {
    return auth.createUserWithEmailAndPassword(email, password)
}

function signin(email, password){
    return auth.signInWithEmailAndPassword(email, password)
}

function signout(){
    return auth.signOut() 
}



export default {
    signup,
    signin,
    signout
}