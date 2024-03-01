import React,{useEffect, useState} from 'react'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios'


function SignUp() {


   

  const [data,setData] = useState({
    name: "",
    email:"",
    phone:"",
    password:"",
    
  })

   const submitHandler = async () =>{

    const res = await axios.post('http://localhost:5000/user/signup',{
      ...data
    }).catch((err)=>{
      console.log(err)
    })
   
    console.log(res)

   }
   

  const ChangeHandler = (e) => {
    setData((prev)=>({
      ...prev,
      [e.target.name] : e.target.value,
    }))
  };


  return (
    <div className="relative py-3 sm:max-w-xl sm:mx-auto">
  <div className="relative px-4 py-10 bg-white  md:mx-0 shadow rounded-3xl sm:p-10 max-w-md mx-auto">
    <div className="flex items-center space-x-5 justify-center">
      <h1 className="card-title">Sign Up</h1>
    </div>
    <div className="mt-6">
      <label className="font-semibold text-sm text-gray-600 pb-1 block"   htmlFor="username">Username</label>
      <input onChange={ChangeHandler} name="name" className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-[280px]" type="text" id="username" />

      <label className="font-semibold text-sm text-gray-600 pb-1 block"   htmlFor="login">E-mail</label>
      <input onChange={ChangeHandler} name="email" className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-[280px]" type="text" id="login" />

      <label className="font-semibold text-sm text-gray-600 pb-1 block"  htmlFor="phone">Phone Number</label>
      <input onChange={ChangeHandler} name="phone"   className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-[280px]" type="text" id="phone" />

      <label className="font-semibold text-sm text-gray-600 pb-1 block"   htmlFor="password">Password</label>
      <input onChange={ChangeHandler} name="password" className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-[280px]" type="password" id="password" />
    </div>
    <div className="flex justify-center w-full items-center">
      
    </div>
    <div className="mt-5">
      <button onClick={submitHandler} className="py-2 px-4 bg-blue-600 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg" type="submit">Sign Up</button>
    </div>
    <div className="flex items-center justify-between mt-4">
      <span className="w-1/5 border-b dark:border-gray-600 md:w-1/4"></span>
      <a className="text-xs text-gray-500 uppercase dark:text-gray-400 hover:underline" href="#">or log in</a>
      <span className="w-1/5 border-b dark:border-gray-400 md:w-1/4"></span>
    </div>
  </div>
</div>

  )
}

export default SignUp