import { useEffect } from 'react';
import LeftPanel from '../loginRegister/LeftPanel.Component';

const LoginRegister = ({ children }: { children: JSX.Element }) => {
  useEffect(() => {
    console.log('ran');
  }, []);

  return (
    <section className='flex h-screen'>
      {/* Left Pane */}
      <LeftPanel />
      {/* Children */}
      {children}
    </section>
  );
};

export default LoginRegister;
