import app from 'firebase/app'
import 'firebase/auth'


const firebaseConfig = {
    apiKey: "AIzaSyDt7JtdnDDaULZNYhuvSBaUWWROBzRSG0U",
    authDomain: "react-builder-app-1a4cb.firebaseapp.com",
    databaseURL: "https://react-builder-app-1a4cb.firebaseio.com",
    projectId: "react-builder-app-1a4cb",
    storageBucket: "react-builder-app-1a4cb.appspot.com",
    messagingSenderId: "337903726562",
    appId: "1:337903726562:web:e648e455317c67792553bb",
    measurementId: "G-8TDYPP27KG"
  };

class Firebase {
    constructor() {
        app.initializeApp(firebaseConfig)
        this.auth = app.auth()
    }

    signup = (email, password) => {
        this.auth.createUserWithEmailAndPassword(email, password)
    }

    signin = (email, password) => {
        this.auth.signInWithEmailAndPassword(email, password)
    }

    signout = () => {
        this.auth.signOut()
    }

}

export default Firebase