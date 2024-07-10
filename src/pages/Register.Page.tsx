import SocialLogins from '../components/loginRegister/SocialLogins.Component';
import RegisterForm from '../components/loginRegister/RegisterForm.Component';

const Register = () => {
  return (
    <div className='w-full bg-gray-100 lg:w-1/2 flex items-center justify-center'>
      <div className='max-w-md w-full p-6'>
        {/* Social logins */}
        <SocialLogins title='Sign Up' />

        {/* Register form */}
        <RegisterForm />
      </div>
    </div>
  );
};

export default Register;
