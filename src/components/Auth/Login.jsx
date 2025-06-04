import React, { useState } from 'react'

const Login = ({handleLogin}) => {
  

   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');

    const submitHandler = (e)=>{
      e.preventDefault()
      handleLogin(email,password)
       
      setEmail ("")
      setPassword("")
        
    }


  return (
    <div className='flex h-screen w-screen items-center justify-center'>
        <div className='border-2 border-orange-600 rounded-2xl p-20'>
            <form 
             onSubmit={(e)=>{
                submitHandler(e)
             }}
            className='flex flex-col items-center justify-center'>
                <input 
                value={email}
                onChange={(e)=>{
                  setEmail(e.target.value);
                  
                }}
                required className=' border-2 outline-none bg-transparent border-orange-400 rounded-full text-xl px-5 py-3   placeholder:text-gray-400' type="email" placeholder='Enter your emails' />

                <input 
                value={password}
                onChange={(e)=>{
               setPassword(e.target.value);
                }}
                required className=' border-2 outline-none bg-transparent border-orange-400 rounded-full text-xl px-5 py-3 mt-3 placeholder:text-gray-400' type="password" placeholder='Enter your password' />

                <button className='text-white  outline-none  bg-orange-400 rounded-full px-5 py-3 text-xl  mt-7 w-full placeholder:text-white ' >Login</button>
            </form>

        </div>
    </div>

  )
} 

export default Login