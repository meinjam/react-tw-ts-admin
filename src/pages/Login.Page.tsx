import LoginForm from '../components/loginRegister/LoginForm.Component';
import SocialLogins from '../components/loginRegister/SocialLogins.Component';

const Login = () => {
  return (
    <div className='w-full lg:w-1/2 flex items-center justify-center bg-main-bg'>
      <div className='max-w-md w-full p-6'>
        {/* Social logins */}
        <SocialLogins title='Sign In' />

        {/* Login form */}
        <LoginForm />
      </div>
    </div>
  );
};

export default Login;
