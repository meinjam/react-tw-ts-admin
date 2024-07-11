import { IoSearchSharp } from 'react-icons/io5';
import { GoBell } from 'react-icons/go';
import { BiMessageRoundedDots } from 'react-icons/bi';
import { FaChevronDown } from 'react-icons/fa6';

const Header = () => {
  return (
    <header className='sticky top-0 z-999 flex w-full bg-white drop-shadow'>
      <div className='flex flex-grow items-center justify-between px-4 py-4 md:px-6 2xl:px-11'>
        <div className='border relative flex items-center h-12 rounded-lg bg-white overflow-hidden'>
          <div className='grid place-items-center h-full w-12 text-gray-300'>
            <IoSearchSharp className='size-6' />
          </div>
          <input
            className='outline-none text-sm text-gray-700 pr-2'
            type='text'
            id='search'
            placeholder='Search something..'
          />
        </div>

        <div className='flex items-center gap-6 text-gray-600'>
          <div className='flex items-center gap-3'>
            <div className='bg-[#f1f4f9] p-2 rounded-full cursor-pointer'>
              <GoBell className='size-5' />
            </div>
            <div className='bg-[#f1f4f9] p-2 rounded-full cursor-pointer'>
              <BiMessageRoundedDots className='size-5' />
            </div>
          </div>
          <div className='cursor-pointer flex items-center gap-3'>
            <div>
              <h5 className='text-sm font-normal'>John Doe</h5>
              <p className='text-xs font-light'>UX Designer</p>
            </div>
            <div className='flex items-center gap-3'>
              <img
                src='https://react-demo.tailadmin.com/assets/user-01-b007ff3f.png'
                alt=''
                className='size-11 rounded-full block'
              />
              <FaChevronDown className='size-4' />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
