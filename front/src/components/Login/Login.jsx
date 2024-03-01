import React from 'react'

function Login() {
  return (
    <div class="relative py-3 sm:max-w-xl sm:mx-auto">
  <div class="relative px-4 py-10 bg-white  md:mx-0 shadow rounded-3xl sm:p-10 max-w-md mx-auto">
    <div class="flex items-center space-x-5 justify-center">
      <h1 className="card-title " >Login</h1>
    </div>
    <div class="mt-6">
      <label class="font-semibold text-sm text-gray-600 pb-1 block" for="login">E-mail</label>
      <input class="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-[280px]" type="text" id="login" />
      <label class="font-semibold text-sm text-gray-600 pb-1 block" for="password">Password</label>
      <input class="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-[280px]" type="password" id="password" />
    </div>
    <div class="text-right mb-4">
      <a class="text-xs font-display font-semibold text-gray-500 hover:text-gray-600 cursor-pointer " href="#">Forgot Password?</a>
    </div>
    <div class="flex justify-center w-full items-center">
      
    </div>
    <div class="mt-5">
      <button class="py-2 px-4 bg-blue-600 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg" type="submit">Log in</button>
    </div>
    <div class="flex items-center justify-between mt-4">
      <span class="w-1/5 border-b dark:border-gray-600 md:w-1/4"></span>
      <a class="text-xs text-gray-500 uppercase dark:text-gray-400 hover:underline" href="#">or sign up</a>
      <span class="w-1/5 border-b dark:border-gray-400 md:w-1/4"></span>
    </div>
  </div>
</div>

  )
}

export default Login