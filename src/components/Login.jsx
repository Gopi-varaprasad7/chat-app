import React,{useState} from 'react';
import Header from './Header';

const Login = () => {
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');

  const validEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  }
  const validPassword = (password) => {
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    return passwordRegex.test(password);
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validEmail(email)) {
      alert('Invalid email format');
      return;
    }
    if (!validPassword(password)) {
      alert('Password must be at least 8 characters long and contain at least one letter and one number');
      return;
    }
    alert('Login successful');
  };
  return (
    <>
      <Header />
      <div className='flex flex-col items-center justify-center mt-48'>
        <h1 className='text-3xl font-bold'>Login Here</h1>
        <form className='flex flex-col gap-5 mt-5' onSubmit={handleSubmit}>
          <div>
            <label>Email</label>
            <br />
            <input
              className='border rounded sm:w-84 h-10 pl-3'
              type='email'
              name='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            {email && !validEmail(email) && (
              <p className='text-red-500'>Invalid email format</p>
            )}
          </div>
          <div>
            <label>Password</label>
            <br />
            <input
              className='border rounded sm:w-84 h-10 pl-3'
              type='password'
              name='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            {password && !validPassword(password) && (
              <p className='text-red-500 text-sm'>
                Password must be at least 8 characters long <br />and contain at least
                one letter and one number
              </p>
            )}
          </div>
          <button
            className='bg-blue-500 text-white px-5 py-2 rounded'
            type='submit'
          >
            Login
          </button>
        </form>
      </div>
    </>
  );
};

export default Login;
