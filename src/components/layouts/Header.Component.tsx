import ThemeSwitch from '@/components/theme/ThemeSwitch.Component';
import Search from '@/components/theme/Search.Component';
// import HeaderAuth from './HeaderAuth.Component';
import HeaderAuth from '@/components/layouts/HeaderAuth.Component';

const Header = () => {
  return (
    <header className='sticky top-0 z-999 flex w-full border-b bg-background'>
      <div className='flex flex-grow items-center justify-between px-4 py-4 md:px-6 2xl:px-11'>
        <Search />

        <div className='flex items-center gap-6 text-gray-600 dark:text-p-white'>
          <div className='flex items-center gap-3'>
            <div className='mr-5'>
              <ThemeSwitch />
            </div>
            {/* <div className='bg-[#f1f4f9] p-2 rounded-full cursor-pointer'>
              <GoBell className='size-5' />
            </div> */}
            {/* <div className='bg-[#f1f4f9] p-2 rounded-full cursor-pointer'>
              <BiMessageRoundedDots className='size-5' />
            </div> */}
            <div className='cursor-pointer relative'>
              <NotifySvg />
              <div className='absolute -top-1 right-0'>
                <span className='relative flex h-3 w-3'>
                  <span className='animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75'></span>
                  <span className='relative inline-flex rounded-full h-3 w-3 bg-red-500'></span>
                </span>
              </div>
            </div>
          </div>
          <HeaderAuth />
        </div>
      </div>
    </header>
  );
};

export default Header;

const NotifySvg = () => {
  return (
    <svg width={24} height={26} viewBox='0 0 24 26' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M10.0277 0C7.73472 0 5.80843 1.72411 5.55522 4.00306L4.5 13.5H1.5C0.671573 13.5 0 14.1716 0 15V16.5C0 17.3284 0.671573 18 1.5 18H22.5C23.3284 18 24 17.3284 24 16.5V15C24 14.1716 23.3284 13.5 22.5 13.5H19.5L18.4448 4.00306C18.1916 1.72411 16.2653 0 13.9723 0H10.0277Z'
        fill='#4880FF'
      />
      <rect opacity='0.3' x={9} y='19.5' width={6} height={6} rx='2.25' fill='#FF0000' />
    </svg>
  );
};
