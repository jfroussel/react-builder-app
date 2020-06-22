import app from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyDt7JtdnDDaULZNYhuvSBaUWWROBzRSG0U",
  authDomain: "react-builder-app-1a4cb.firebaseapp.com",
  databaseURL: "https://react-builder-app-1a4cb.firebaseio.com",
  projectId: "react-builder-app-1a4cb",
  storageBucket: "react-builder-app-1a4cb.appspot.com",
  messagingSenderId: "337903726562",
  appId: "1:337903726562:web:e648e455317c67792553bb",
  measurementId: "G-8TDYPP27KG",
};

class Firebase {
  constructor() {
    app.initializeApp(config);
    this.auth = app.auth();
    this.db = app.firestore();
  }

  signup = (email, password) => {
    return this.auth.createUserWithEmailAndPassword(email, password);
  };

  signin = (email, password) => {
    return this.auth.signInWithEmailAndPassword(email, password);
  };

  signout = () => {
    return this.auth.signOut();
  };

  user = () => {
    const user = this.auth.currentUser;
    if (user != null) {
      return user;
    }
  };
  isLoggedIn = () => {
    this.auth.onAuthStateChanged(function (user) {
      if (user) {
        return true;
      }
    });
  };
}

export default Firebase;
