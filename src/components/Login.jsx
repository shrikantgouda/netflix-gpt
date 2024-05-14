import React, {useRef, useState} from 'react'
import { Header } from './Header'
import { checkValidData } from '../utils/validate'
import {  createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile  } from "firebase/auth";
import { auth } from '../utils/firebase';

import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import { BGLOGO, PHOTOIMAGE } from '../utils/constants';

export const Login = () => {
  const [isSign, setSignIn] = useState(true)
  const [error, setError] = useState(null)
 
  const dispatch = useDispatch()

  const name = useRef(null)
  const email = useRef(null)
  const password = useRef(null)

  const handleFormValidData = (e) =>{
    e.preventDefault()
    const message =checkValidData(email.current.value, password.current.value)
    setError(message)
    if(message) return ;

    if(!isSign){
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
      .then((userCredential) => {
     
       const user = userCredential.user;
       updateProfile(user, {
        displayName: name.current.value, photoURL: PHOTOIMAGE,
      }).then(() => {
        const {uid, email, displayName, photoURL} = user;
        dispatch(addUser({uid:uid, email:email, displayName:displayName, photoURL:photoURL}))
    
      }).catch((error) => {
        setError(error.message)
      });
        
       
     })
     .catch((error) => {
       const errorCode = error.code;
       const errorMessage = error.message;
       setError(errorCode+ "-" +errorMessage)
     });
    } else{
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
     .then((userCredential) => {
        
        const user = userCredential.user;
    
        
      })
      .catch((error) => {
       const errorCode = error.code;
       const errorMessage = error.message;
       setError(errorCode+ "-" +errorMessage)
      });

    }
  }

   const toggleSignInForm = () =>{
     setSignIn(!isSign)
   }
  return (
   <div> 
     <Header />
     <div className='absolute'>
      <img src={BGLOGO}
       alt='logo' />
    </div>
    <form className='w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80'>
      <h1 className='font-bold text-3xl py-4'>{isSign ? "Sign In" : "Sign Up"}</h1>
     {!isSign && <input ref={name} type='text' placeholder='full Name' className='p-2 my-2 w-full bg-gray-700' />  }
       <input 
        ref={email}
        type='text' 
        placeholder='Email'
        className='p-2 my-2 w-full bg-gray-700' 
       />
       <input 
        ref={password}
        type='password' 
        placeholder='Password' 
        className='p-2 my-2 w-full bg-gray-700' 
       />
       <p className='text-red-500'>{error}</p>
       <button 
        className='p-3 my-4 bg-red-700 w-full rounded-lg'
        onClick={handleFormValidData}>{isSign ? "Sign In" : "Sign Up"}</button>
      <p className='py-4 cursor-pointer' onClick={toggleSignInForm}>{isSign ? "New to Netflix? Sign up now" : "Already registered? Sign in now"}</p>
    </form>
    </div>
  )
}
