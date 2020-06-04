
import firebase from 'firebase'

const db = firebase.firestore()

const getCollection =  async ( name ) => {
    const collection = []
    await db.collection(name).get().then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
            let elm = {...doc.data(), id:doc.id}
            collection.push(elm)
        });
    });
    console.log(collection)
    return collection
    
}

const addDataInCollection = async (name, data) => {
    await db.collection(name).doc().set(data)
        .then(() => {
            console.log("Document successfully written!");
        })
        .catch( error => {
            console.error("Error writing document: ", error);
        })
}

const deleteDataInCollection = async ( name, uid) => {
    await db.collection(name).doc(uid).delete().then(function() {
        console.log("Document successfully deleted!");
    }).catch(function(error) {
        console.error("Error removing document: ", error);
    });
}
  
export default { getCollection, addDataInCollection, deleteDataInCollection }