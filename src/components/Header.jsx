import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className='fixed top-0 bg-white z-50 w-full'>
    <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
      <Link className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0" to={"/"}>
        <img src="/logo.png" alt="logo" width={50}/>
        <span className="ml-3 text-xl">Music Player</span>
      </Link>
      
     
    </div>
  </header>
  
  )
}

export default Header