

export const checkValidData = (email, password) => {
 
     const isEmailValid = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,6}$|^$|^ $/.test(email)
     const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password)
   //  const isnameValid =/"^[A-Za-z][A-Za-z0-9_]{7,29}$"/.test(name)

    // if(!isnameValid) return "name is not valid"
     if (!isEmailValid) return "Email is not Valid"
     if (!isPasswordValid) return "password is not valid"
    

     return null;
}
