import { FaChevronDown } from 'react-icons/fa6';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { useAuth } from '@/context/AuthContext';
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card';
import { Link } from 'react-router-dom';

const HeaderAuth = () => {
  const { user, loggedOut } = useAuth();

  const handleLogout = () => {
    loggedOut();
  };

  return (
    <>
      <HoverCard openDelay={100} closeDelay={100}>
        <HoverCardTrigger>
          <div className='cursor-pointer flex items-center gap-5'>
            <Avatar className='size-12'>
              <AvatarImage src='https://react-demo.tailadmin.com/assets/user-01-b007ff3f.png' />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <div className='flex items-center gap-6'>
              <div className='text-foreground'>
                <h5 className='text-sm font-normal'>{user?.name}</h5>
                <p className='text-xs font-light'>UX Designer</p>
              </div>
              <div className='rounded-full border dark:border-muted-foreground p-1 text-secondary-foreground'>
                <FaChevronDown className='size-3' />
              </div>
            </div>
          </div>
        </HoverCardTrigger>
        <HoverCardContent align='end' className='w-44 p-0 py-2 bg-background'>
          <ul>
            <li>
              <Link to='/admin/profile' className='hover:bg-secondary block px-2 py-1 duration-300'>
                Profile
              </Link>
            </li>
            <li>
              <span onClick={handleLogout} className='hover:bg-secondary block px-2 py-1 duration-300 cursor-pointer'>
                Logout
              </span>
            </li>
          </ul>
        </HoverCardContent>
      </HoverCard>
    </>
  );
};

export default HeaderAuth;
