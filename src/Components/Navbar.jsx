import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className=' w-full  bg-blue-600 p-5 flex justify-center gap-5 '>
      <div><Link to='/' className='text-[22px] text-white'>Home </Link></div>
      <div><Link to='/login' className='text-[22px]  text-white'>Login </Link></div>
        
        
    </div>
  )
}

export default Navbar