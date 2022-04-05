import { useEffect, useState } from 'react';
import initializeFirebase from '../Firebase/FirebaseInitialize';
import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  signInWithEmailAndPassword,
  updateProfile,
  signInWithPopup,
  GoogleAuthProvider,
} from 'firebase/auth';


initializeFirebase();

const useFirebase = () => {
  const [error, setError] = useState('');
  const [isLoading, setIsLoadng] = useState(true);
  
  


  const [user, setUser] = useState({});
  const auth = getAuth();

  const googleProvider = new GoogleAuthProvider();

  const GoogleLogin = () => {
    return signInWithPopup(auth, googleProvider);
  };

  // create User ////
  const register = (email, password, name) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        const newUser = { email, displayName: name };
        setUser(newUser);

        // UPdate user In FIrebse //
        updateProfile(auth.currentUser, {
          displayName: name,
        })
          .then(() => {
            // Profile updated!
            // ...
          })
          .catch((error) => {
            // An error occurred
            // ...
          });

        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        // ..
      });
  };

  // LogOUt User //

  const LogOUt = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        setError(error.message);
        // An error happened.
      });
  };

  // Sign IN user ///
  const Login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

 

  // Observer ///
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
      
        setUser(user);
        setIsLoadng(false);
        // ...
      } else {
        setUser({});
        // User is signed out
        // ...
       
      }
    });
    return () => unSubscribe;
  }, []);



  return {
    user,
    register,
    LogOUt,
    Login,
    error,
    setError,
    isLoading,
    setIsLoadng,
    GoogleLogin,
 
  };
};

export default useFirebase;
