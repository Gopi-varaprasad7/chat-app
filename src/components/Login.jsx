import React from 'react'

const Login = () => {
  return (
    <div>
        <form>
            <label>Email</label><br/>
            <input
            className='border rounded'
             type="email" name="email" required/><br/>
            <label>Password</label><br/>
            <input
            className='border rounded' type="password" name="password" required/><br/>
            <button
            className='bg-blue-500 text-white px-5 py-2 rounded'
            type="submit">Login</button>
        </form>
    </div>
  )
}

export default Login