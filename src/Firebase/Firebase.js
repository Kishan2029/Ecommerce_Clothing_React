import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

var config = {
    apiKey: "AIzaSyDs-h-XHOEQLkKpL5iIPlOUpGT0srhR8UA",
    authDomain: "e-commerce-132ba.firebaseapp.com",
    projectId: "e-commerce-132ba",
    storageBucket: "e-commerce-132ba.appspot.com",
    messagingSenderId: "763742686134",
    appId: "1:763742686134:web:ce9004024fb414d431cf17",
    measurementId: "G-TTSGN9HFZV"
  };

  export const createUserProfileDocument = async(userAuth, additionalData) => {
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`)

    const snapShot = await userRef.get()

    if(!snapShot.exists){
      const{ displayName, email} = userAuth;
      const createdAt = new Date();

      try{
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        })
      }
      catch(error){
        console.log('error creating user',error.message)
      }
    }
    return userRef;
  }

  firebase.initializeApp(config);

  export const auth=firebase.auth();
  export const firestore=firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;