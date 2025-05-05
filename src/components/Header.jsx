import React from 'react'
import { useNavigate } from 'react-router-dom';


const Header = () => {

    const navigate = useNavigate ();

    const handleLogin =() => {
        navigate('/login')
    }
    const handleRegister = () => {
        navigate('/register')
    }
  return (
    <div 
    className='flex content-center justify-between 
    px-10 pt-5 bg-gradient-to-r from-blue-500 to-purple-500'>
    <div>
        <h1 className='text-white'>Logo</h1>
    </div>
    <div className='flex gap-5  pb-4'>
        <button 
        className='bg-blue-500 text-white px-5 py-2 rounded'
        onClick={handleLogin}
        >Sign In</button>
        <button 
        className='bg-blue-500 text-white px-5 py-2 rounded'
        onClick={handleRegister}
        >Sign Up</button>
    </div>
</div>
  )
}

export default Header;