import { Link } from 'react-router-dom';
import { FaChevronDown } from 'react-icons/fa6';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { useAuth } from '@/context/AuthContext';
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card';
import AccountSvg from '@/assets/img/user.svg';
import PasswordSvg from '@/assets/img/password.svg';
import LogSvg from '@/assets/img/refresh.svg';
import LogoutSvg from '@/assets/img/logout.svg';

const HeaderAuth = () => {
  const { user, loggedOut } = useAuth();

  const handleLogout = () => {
    loggedOut();
  };

  return (
    <>
      <HoverCard openDelay={100} closeDelay={100} defaultOpen={true}>
        <HoverCardTrigger>
          <div className='cursor-pointer flex items-center gap-5'>
            <Avatar className='size-12'>
              <AvatarImage src='https://react-demo.tailadmin.com/assets/user-01-b007ff3f.png' />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <div className='flex items-center gap-6'>
              <div className='text-foreground'>
                <h5 className='text-sm font-bold'>{user?.name}</h5>
                <p className='text-xs font-semibold'>UX Designer</p>
              </div>
              <div className='rounded-full border dark:border-muted-foreground p-1 text-secondary-foreground'>
                <FaChevronDown className='size-3' />
              </div>
            </div>
          </div>
        </HoverCardTrigger>
        <HoverCardContent align='end' className='w-48 px-4 py-2 bg-background'>
          <ul>
            <li>
              <Link to='/admin/profile' className='mb-1 py-1 flex items-center gap-3'>
                <img src={AccountSvg} alt='user icon' className='size-4' />
                <span className='hover:opacity-80 duration-300 text-sm font-semibold'>Manage Account</span>
              </Link>
            </li>
            <li>
              <Link to='/admin/profile' className='mb-1 py-1 flex items-center gap-3'>
                <img src={PasswordSvg} alt='user icon' className='size-4' />
                <span className='hover:opacity-80 duration-300 text-sm font-semibold'>Change Password</span>
              </Link>
            </li>
            <li>
              <Link to='/admin/profile' className='mb-1 py-1 flex items-center gap-3'>
                <img src={LogSvg} alt='user icon' className='size-4' />
                <span className='hover:opacity-80 duration-300 text-sm font-semibold'>Activity Log</span>
              </Link>
            </li>
            <li>
              <span onClick={handleLogout} className='py-1 cursor-pointer flex items-center gap-3'>
                <img src={LogoutSvg} alt='user icon' className='size-4' />
                <span className='hover:opacity-80 duration-300 text-sm font-semibold'> Log out</span>
              </span>
            </li>
          </ul>
        </HoverCardContent>
      </HoverCard>
    </>
  );
};

export default HeaderAuth;
