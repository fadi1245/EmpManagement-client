import React from 'react'
import logo from '../assets/F.png'

function Navbar() {
  return (
    <div>
        <div className='bg-red-700 w-full flex justify-between py-4 px-4 items-center'>
      <img src={logo} className='w-12' alt="" />
      <a href="/"><div className='bg-blue-400 px-3 py-2 rounded-lg'>HOME</div></a>
      </div>
    </div>
  )
}

export default Navbar
