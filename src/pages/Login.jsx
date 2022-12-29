import React from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from '../FIrebase/firebase';
// import { GoogleAuthProvider } from "firebase/auth";
import { useAuthState } from 'react-firebase-hooks/auth';

const Login = () => {
    const [user, loading, error] = useAuthState(auth);
    console.log(user,'showing the state of user')

    const provider = new GoogleAuthProvider();
    const signGoogle=()=>{
        signInWithPopup(auth, provider)
        .then((result) => {
          const user = result.user;
          console.log(user)
    
        }).catch((error) => {
          // Handle Errors here.
          const errorCode = error.code;
          const errorMessage = error.message;
          // The email of the user's account used.
          console.log(errorCode, errorMessage)
        
        });
    }
    return (
        <div>
            <h2> First authenticate with the google now </h2>
            <button onClick={signGoogle}> Signin With Google </button>
        </div>
    );
};

export default Login;