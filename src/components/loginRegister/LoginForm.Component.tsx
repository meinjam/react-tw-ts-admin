import { useState } from 'react';
import { Link } from 'react-router-dom';

interface LoginDataType {
  email: string;
  password: string;
}

const LoginForm = () => {
  const [data, setData] = useState<LoginDataType>({
    email: '',
    password: '',
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log(data);
  };

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData((prevState) => {
      return {
        ...prevState,
        [e.target.name]: e.target.value,
      };
    });
  };

  return (
    <>
      <form className='space-y-4' onSubmit={handleSubmit}>
        <div>
          <label htmlFor='email' className='block text-sm font-medium text-gray-700'>
            Email
          </label>
          <input
            value={data.email}
            onChange={handleInput}
            type='text'
            id='email'
            name='email'
            placeholder='enter your email'
            className='mt-1 p-2 w-full border rounded-md focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-colors duration-300'
          />
        </div>
        <div>
          <label htmlFor='password' className='block text-sm font-medium text-gray-700'>
            Password
          </label>
          <input
            value={data.password}
            onChange={handleInput}
            type='password'
            id='password'
            name='password'
            placeholder='enter your password'
            className='mt-1 p-2 w-full border rounded-md focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-colors duration-300'
          />
        </div>
        <div>
          <button
            type='submit'
            className='w-full bg-black text-white p-2 rounded-md hover:bg-gray-800 focus:bg-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 transition-colors duration-300'
          >
            Sign In
          </button>
        </div>
      </form>
      <div className='mt-4 text-sm text-gray-600 text-center'>
        <p>
          Don't have an account?{' '}
          <Link to='/register' className='text-black hover:underline'>
            Register here
          </Link>
        </p>
      </div>
    </>
  );
};

export default LoginForm;
