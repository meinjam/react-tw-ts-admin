import { cn } from '@/lib/cn';
import { Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa6';

interface NotFoundComponentType {
  applyMinHeight?: boolean;
  inputClasses?: string;
}

const NotFoundComponent = ({ applyMinHeight, inputClasses }: NotFoundComponentType) => {
  return (
    <div
      style={{ minHeight: applyMinHeight ? '75vh' : '' }}
      className={cn(
        'bg-white border border-gray-100 m-auto flex flex-col items-center justify-center px-4 md:px-8 lg:px-24 py-8 md:py-12 rounded-lg shadow-2xl',
        inputClasses
      )}
    >
      <p className='text-6xl md:text-7xl lg:text-9xl font-bold tracking-wider text-gray-300'>404</p>
      <p className='text-2xl md:text-3xl lg:text-5xl font-bold tracking-wider text-gray-500 mt-4'>Page Not Found</p>
      <p className='text-gray-500 mt-4 pb-4 border-b-2 text-center'>
        Sorry, the page you are looking for could not be found.
      </p>
      <Link
        to='/'
        className='flex items-center space-x-2 bg-black text-white py-2 px-4 rounded-md hover:bg-gray-800 focus:outline-none focus:bg-black focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 transition-colors duration-300 mt-6'
        title='Return Home'
      >
        <FaArrowLeft />
        <span>Return Home</span>
      </Link>
    </div>
  );
};

export default NotFoundComponent;
