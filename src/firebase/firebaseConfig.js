import firebase from "firebase/compat/app";
import { getFirestore } from "firebase/firestore";
import "firebase/compat/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyCOFJLP2RD0jweFa_VNar2YQHkYsvUtyw4",
  authDomain: "game-vision-66003.firebaseapp.com",
  projectId: "game-vision-66003",
  storageBucket: "game-vision-66003.appspot.com",
  messagingSenderId: "544353822649",
  appId: "1:544353822649:web:9269ff8a19300256793868",
  measurementId: "G-QJHWNLFHPG",
};

const app = firebase.initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const firestore = firebase.firestore();

export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  const collectionRef = firestore.collection(collectionKey);
  const batch = firestore.batch();
  objectsToAdd.forEach((obj) => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, obj);
  });
  return await batch.commit();
};

export const convertCollectionsSnapshotToMap = (collections) => {
  const transformedCollection = collections.docs.map((doc) => {
    const { title } = doc.data();
    console.log(doc);
  });

  return transformedCollection.reduce((accumulator, collection) => {
    accumulator[collection.title.toLowerCase()] = collection;
    return accumulator;
  }, {});
};

export default firebase;
