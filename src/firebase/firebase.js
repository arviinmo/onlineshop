import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAu5QURSURBTpQf8sxjL32MxiEHzXU-ZfQ",
    authDomain: "ecommres.firebaseapp.com",
    projectId: "ecommres",
    storageBucket: "ecommres.appspot.com",
    messagingSenderId: "651567703518",
    appId: "1:651567703518:web:99aa80ab71b7bceb95294f",
    measurementId: "G-0MXZ516MN4"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();
  
  if(!snapShot.exits){
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })

    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
}


firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore =firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
