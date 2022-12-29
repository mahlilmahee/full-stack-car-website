import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth } from '../FIrebase/firebase';

const Signup = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);
    const [email,setEmail]=useState()
    const [password,setPassword]=useState()
    console.log(error, 'show me the error')
console.log(email,password)
console.log(user,'its the overall user we need ')
const handlesubmit=async(e)=>{
    e.preventDefault();
   await createUserWithEmailAndPassword(email,password)
  
}

    return (
        <div>
            <form >
<input type="email" placeholder='give your email here ' onChange={(e)=>{setEmail(e.target.value)}}/>
<input type="password" placeholder='give your password here ' onChange={(e)=>{setPassword(e.target.value)}}/>
<button type='submit' onClick={handlesubmit}> submit ho ja </button>

            </form>
        </div>
    );
};

export default Signup;