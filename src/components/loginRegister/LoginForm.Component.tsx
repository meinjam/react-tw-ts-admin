import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useAuth } from '@/context/AuthContext';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

interface LoginDataType {
  email: string;
  password: string;
}

const schema = yup.object().shape({
  email: yup.string().required('Email field is required.').email('Email must be a valid email address.'),
  password: yup
    .string()
    .required('Password field is required.')
    .min(8, 'Password must be at least 8 character.')
    .max(20, 'Password must be at most 20 character.'),
});

const token = 'V3KUXmSFQUSCpvK1dHu3mafZ9BIOkmGrs1dGQ3zW45ne9FaolT';

const LoginForm = () => {
  const { loggedIn, afterLoggedIn } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = (data: LoginDataType) => {
    // console.log(data);
    const authData = {
      ...data,
      id: 1,
      name: 'John Doe',
      role: {
        id: 2,
        role_id: 1,
        role_name: 'super_admin',
      },
    };

    loggedIn(token, authData);
    afterLoggedIn(token, authData);
  };

  return (
    <>
      <form className='space-y-4' onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor='email' className='block text-sm font-medium'>
            Email
          </label>
          <Input
            {...register('email')}
            type='text'
            id='email'
            name='email'
            placeholder='enter your email'
            className='mt-1 p-2'
          />
          {errors.email && <small className='text-danger'>{errors.email.message}</small>}
        </div>
        <div>
          <label htmlFor='password' className='block text-sm font-medium'>
            Password
          </label>
          <Input
            {...register('password')}
            type='password'
            id='password'
            name='password'
            placeholder='enter your password'
            className='mt-1 p-2'
          />
          {errors.password && <small className='text-danger'>{errors.password.message}</small>}
        </div>
        <div>
          <Button type='submit' className='w-full'>
            Sign In
          </Button>
        </div>
      </form>
      <div className='mt-4 text-sm text-center'>
        <p>
          Don't have an account?{' '}
          <Link to='/register' className='hover:underline'>
            Register here
          </Link>
        </p>
      </div>
    </>
  );
};

export default LoginForm;
