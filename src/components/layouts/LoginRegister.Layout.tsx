import LeftPanel from '../loginRegister/LeftPanel.Component';
import ThemeSwitch from '../theme/ThemeSwitch.Component';

const LoginRegister = ({ children }: { children: JSX.Element }) => {
  return (
    <section className='flex h-screen'>
      {/* Left Pane */}
      <LeftPanel />
      {/* Children */}
      {children}

      <div className='absolute top-5 right-5 lg:top-10 lg:right-10'>
        <ThemeSwitch />
      </div>
    </section>
  );
};

export default LoginRegister;
