import React, { useEffect } from 'react'
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import {   onAuthStateChanged, signOut } from "firebase/auth";
import {  useDispatch, useSelector } from 'react-redux';
import {addUser, removeUser} from "../utils/userSlice"
import { LOGO } from '../utils/constants';
 

export const Header = () => {
  const Navigate = useNavigate()
 const dispatch = useDispatch()
  const user = useSelector(store => store.user)
  const handleSignOut = () =>{
    signOut(auth)
    .then(() => {
      
    }).catch((error) => {
      // An error happened.
    });
    
  }

  useEffect(() =>{
   const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
       
        const {uid, email, displayName, photoURL} = auth.currentUser;
        dispatch(addUser({uid:uid, email:email, displayName:displayName, photoURL:photoURL}))
        Navigate("/browse")
      } else {
        dispatch(removeUser())
        Navigate('/')
      }
  
     
    });
    return () => unsubscribe()
  },[]);
  
  
  return (
  <div className='absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between'> 
    <img className='w-44'
    src={LOGO}
    alt='logo'/>
   { user && <div className='flex p-4'>
         <img className='w-8 h-8 '
          alt='icon'
          src={user.photoURL}
          />
      <button onClick={handleSignOut} className='font-bold text-white'>Sign Out</button>
    </div>
}
  </div>
  )
}

