import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '@/context/AuthContext';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

interface RegisterDataType {
  username: string;
  email: string;
  password: string;
}

const user = {
  email: 'john@gmail.com',
  name: 'John Doe',
  id: 1,
  role: {
    id: 2,
    role_id: 1,
    role_name: 'super_admin',
  },
};

const token = 'V3KUXmSFQUSCpvK1dHu3mafZ9BIOkmGrs1dGQ3zW45ne9FaolT';

const RegisterForm = () => {
  const { loggedIn, afterLoggedIn } = useAuth();
  const [data, setData] = useState<RegisterDataType>({
    username: '',
    email: '',
    password: '',
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // console.log(data);
    loggedIn(token, user);
    afterLoggedIn(token, user);
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
      <form onSubmit={handleSubmit} className='space-y-4'>
        <div>
          <label htmlFor='username' className='block text-sm font-medium'>
            Username
          </label>
          <Input
            value={data.username}
            onChange={handleInput}
            type='text'
            id='username'
            name='username'
            placeholder='enter your username'
            className='mt-1 p-2'
          />
        </div>
        <div>
          <label htmlFor='email' className='block text-sm font-medium'>
            Email
          </label>
          <Input
            value={data.email}
            onChange={handleInput}
            type='text'
            id='email'
            name='email'
            placeholder='enter your email'
            className='mt-1 p-2'
          />
        </div>
        <div>
          <label htmlFor='password' className='block text-sm font-medium text-gray-700'>
            Password
          </label>
          <Input
            value={data.password}
            onChange={handleInput}
            type='password'
            id='password'
            name='password'
            placeholder='enter your password'
            className='mt-1 p-2'
          />
        </div>
        <div>
          <Button type='submit' className='w-full'>
            Sign Up
          </Button>
        </div>
      </form>
      <div className='mt-4 text-sm text-center'>
        <p>
          Already have an account?{' '}
          <Link to='/login' className='hover:underline'>
            Login here
          </Link>
        </p>
      </div>
    </>
  );
};

export default RegisterForm;
