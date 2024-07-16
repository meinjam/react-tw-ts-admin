import { useTheme } from '@/context/ThemeContext';
import { RxMoon, RxSun } from 'react-icons/rx';

const ThemeSwitch = () => {
  const { currentTheme, selectCurrentTheme } = useTheme();

  const handleTheme = (theme: 'dark' | 'light') => {
    selectCurrentTheme(theme);
    document.documentElement.classList.add(theme);
    document.documentElement.classList.remove(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <>
      {currentTheme === ('dark' || 'system') && (
        <RxMoon className='size-5 cursor-pointer text-white' onClick={() => handleTheme('light')} />
      )}
      {currentTheme === 'light' && <RxSun className='size-5 cursor-pointer' onClick={() => handleTheme('dark')} />}

      {/* <Switch onCheckedChange={handleTheme} checked={isChecked} /> */}
      {/* <HoverCard openDelay={100} closeDelay={100}>
        <HoverCardTrigger asChild>
          <Button variant='link'>@nextjs</Button>
        </HoverCardTrigger>
        <HoverCardContent className='w-80'>
          <div className='flex justify-between space-x-4'>
            <div className='space-y-1'>
              <h4 className='text-sm font-semibold'>@nextjs</h4>
              <p className='text-sm'>The React Framework – created and maintained by @vercel.</p>
              <div className='flex items-center pt-2'>
                <span className='text-xs text-muted-foreground'>Joined December 2021</span>
              </div>
            </div>
          </div>
        </HoverCardContent>
      </HoverCard> */}
    </>
  );
};

export default ThemeSwitch;
