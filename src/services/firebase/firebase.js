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

  getCollection = async (name, uid) => {
    const collection = [];
    await this.db
      .collection(name)
      .where("uid", "==", uid)
      .get()
      .then(function (querySnapshot) {
        querySnapshot.forEach(function (doc) {
          let elm = { ...doc.data(), id: doc.id };
          collection.push(elm);
        });
      });
    return collection;
  };

  deleteDataInCollection = async (name, uid) => {
    await this.db
      .collection(name)
      .doc(uid)
      .delete()
      .then(function () {
        console.log("Document successfully deleted!");
      })
      .catch(function (error) {
        console.error("Error removing document: ", error);
      });
  };

  addDataInCollection = (globalProjects, data) => {
    this.db
      .collection(globalProjects)
      .doc()
      .set(data)
      .then(() => {
        console.log("Document successfully written!");
      })
      .catch((error) => {
        console.error("Error writing document: ", error);
      });
  };
}

export default Firebase;
