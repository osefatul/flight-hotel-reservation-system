import React from 'react'

function MailList() {
  return (
    <div className="w-full bg-slate-900 text-white flex flex-col items-center space-y-2 p-5 mt-10">
      <h1 className="text-3xl font-bold">Save time, save money!</h1>
      <span className="mailDesc">Sign up and we'll send the best deals to you</span>
      
      <div className="mailInputContainer">
        <input type="text" placeholder="Your Email" className='bg-slate-900 !outline-none border border-yellow-500 rounded-sm pl-1 mr-2 w-56' />
        <button className="font-bold pointer-cursor rounded-sm text-black bg-yellow-500 w-24 rounded-sm ">Subscribe</button>
      </div>
    
    </div>
  )
}

export default MailList