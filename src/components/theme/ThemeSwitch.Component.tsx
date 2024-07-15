import { useEffect, useState } from 'react';
import { useTheme } from '@/context/ThemeContext';
import { Switch } from '@/components/ui/switch';

const ThemeSwitch = () => {
  const { currentTheme, selectCurrentTheme } = useTheme();
  const [isChecked, setIsChecked] = useState<boolean>(false);

  useEffect(() => {
    if (currentTheme) {
      if (currentTheme === 'dark') {
        setIsChecked(true);
      }
    }
  }, [currentTheme]);

  const handleTheme = () => {
    if (currentTheme === 'dark') {
      selectCurrentTheme('light');
      document.documentElement.classList.add('light');
      document.documentElement.classList.remove('dark');
    } else {
      selectCurrentTheme('dark');
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
    }

    setIsChecked((prevSta) => {
      //   console.log(prevSta);

      //   if (!prevSta) {
      //     console.log('dark');
      //   } else {
      //     console.log('light');
      //   }

      return !prevSta;
    });
  };

  return (
    <>
      <Switch onCheckedChange={handleTheme} checked={isChecked} />
    </>
  );
};

export default ThemeSwitch;
