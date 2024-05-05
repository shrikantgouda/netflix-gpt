import React, {useState} from 'react'
import { Header } from './Header'

export const Login = () => {
  const [isSign, setSignIn] = useState(true)
   const toggleSignInForm = () =>{
     setSignIn(!isSign)
   }
  return (
   <div> 
     <Header />
     <div className='absolute'>
      <img src='https://assets.nflxext.com/ffe/siteui/vlv3/d253acf4-a1e2-4462-a416-f78802dc2d85/f04bf88c-f71c-4d02-82ed-adb870b8f8db/IN-en-20240429-POP_SIGNUP_TWO_WEEKS-perspective_WEB_658a042e-62cf-473d-8da0-7b875f23e2ef_medium.jpg'
       alt='logo' />
    </div>
    <form className='w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80'>
      <h1 className='font-bold text-3xl py-4'>{isSign ? "Sign In" : "Sign Up"}</h1>
     {!isSign && <input type='text' placeholder='full-Name' className='p-2 my-2 w-full bg-gray-700' />  }
      <input type='text' placeholder='email' className='p-2 my-2 w-full bg-gray-700' />
      <input type='password' placeholder='password' className='p-2 my-2 w-full bg-gray-700' />
      <button className='p-3 my-4 bg-red-700 w-full rounded-lg'>{isSign ? "Sign In" : "Sign Up"}</button>
      <p className='py-4 cursor-pointer' onClick={toggleSignInForm}>{isSign ? "New to Netflix? Sign up now" : "Already registered? Sign in now"}</p>
    </form>
    
    
     
    
    </div>
  )
}
