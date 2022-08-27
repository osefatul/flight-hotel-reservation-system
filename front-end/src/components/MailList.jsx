import React from 'react'

function MailList() {
  return (
    <div className="w-full bg-black text-white flex flex-col items-center space-y-2 p-5 mt-10">
      <h1 className="text-lg sm:text-3xl font-bold">Save time, save money!</h1>
      <span className="text-[12px]">Sign up and we'll send the best deals to you</span>
      
      <div className="mailInputContainer">
        <input type="text" placeholder="Enter your email" className='bg-slate-900 !outline-none  rounded-sm pl-2 mr-2 h-6 sm:h-8 w-38 sm:w-56 placeholder:text-[12px]  '/>
        <button className="font-bold pointer-cursor rounded-sm text-black bg-yellow-500 w-24 rounded-sm text-[13px] sm:text-md ">Subscribe</button>
      </div>
    
    </div>
  )
}

export default MailList