import { IoSearchSharp } from 'react-icons/io5';

const Search = () => {
  return (
    <div>
      <div className='border relative flex items-center h-12 rounded-3xl bg-main-bg dark:bg-[#323D4E] overflow-hidden min-w-96'>
        <div className='grid place-items-center h-full w-12 text-gray-300'>
          <IoSearchSharp className='size-6' />
        </div>
        <input
          className='outline-none bg-main-bg dark:bg-[#323D4E] text-sm pr-2'
          type='text'
          id='search'
          placeholder='Search something..'
        />
      </div>
    </div>
  );
};

export default Search;
