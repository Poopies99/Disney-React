import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

const firebaseConfig = {
    apiKey: "AIzaSyD63CqCAYPe5lVAP1UnCtdUebHnmUBLRtU",
    authDomain: "disney-react-952fa.firebaseapp.com",
    projectId: "disney-react-952fa",
    storageBucket: "disney-react-952fa.appspot.com",
    messagingSenderId: "552935372907",
    appId: "1:552935372907:web:bd8d23d2ad0faa0757192e",
    measurementId: "G-2Y8C076E38"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;