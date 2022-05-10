import { collection, getDocs } from 'firebase/firestore';
import { db } from './firebaseConfig.js';

export const getDocsFromCollection = async (collectionName) => {
  const docsRef = await getDocs(collection(db, collectionName));
  return docsRef.docs.map((doc) => ({ ...doc.data() }));
};
