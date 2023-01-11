import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <div className='justify-between flex mt-3 shadow-sm py-3'>
              <div>
                <h1 className='text-2xl'>Habibi Garage</h1>
              </div>
              <div className='gap-4 flex mr-7 text-xl hover:text-extrabold'>
                <Link to='/' >Home</Link>
                <Link to='/aboutus' >About Us</Link>
                <Link to='/services' >Services</Link>
                <Link to='/services' >Partners</Link>
                <Link to='/contactus' >Contact Us</Link>
              </div>
        </div>
    </div>
  )
}

export default Navbar