import React, { useEffect } from 'react'
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import {   onAuthStateChanged, signOut } from "firebase/auth";
import {  useDispatch, useSelector } from 'react-redux';
import {addUser, removeUser} from "../utils/userSlice"
import { LOGO, SUPPORTED_LANGUAGES } from '../utils/constants';
import { toggleGptSearchView } from '../utils/gptSlice';
import { changeLanguage } from '../utils/configSlice';
 

export const Header = () => {
  const Navigate = useNavigate()
 const dispatch = useDispatch()
  const user = useSelector(store => store.user)
  const showGptsearch = useSelector(store => store.gpt.showGptsearch)
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
        Navigate("/Browse")
      } else {
        dispatch(removeUser())
        Navigate('/')
      }
  
     
    });
    return () => unsubscribe()
  },[]);

  const handleGptSearchClick = () => {
    dispatch(toggleGptSearchView())
  }
  
  const handleLanguageChange = (e) => {
  dispatch(changeLanguage(e.target.value))
  }
  
  return (
  <div className='absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex flex-col md:flex-row justify-between '> 
    <img className='w-36 mx-auto md:mx-0'
    src={LOGO}
    alt='logo'/>
   { user && 
   (<div className='flex justify-center p-2'>
   {showGptsearch && <select className='px-4 py-0 bg-gray-900 text-white rounded-lg' onChange={handleLanguageChange}>
      {SUPPORTED_LANGUAGES.map((lang) => (
        <option key={lang.identifier} value={lang.identifier}>{lang.name}</option>
      ))}
    </select>
}
   <button className='py-0.5 px-4 mx-2 my-2 bg-purple-800 text-white rounded-lg' onClick={handleGptSearchClick}>
    {showGptsearch ? "Home page" : "Gpt search"}</button>
         <img className='w-8 h-8 rounded-full my-3'
          alt='icon'
          src={user.photoURL}
          />
     
      <button onClick={handleSignOut} className='font-bold text-white hover:opacity-70'>Sign Out</button>
    </div>
)}
  </div>
  )
}

