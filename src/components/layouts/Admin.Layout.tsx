import Header from '@/components/layouts/Header.Component';
import Sidebar from '@/components/layouts/Sidebar.Component';
import { ReactNode } from 'react';

const Admin = ({ children }: { children: ReactNode }) => {
  return (
    <div className='bg-[#f1f4f9] flex h-screen overflow-hidden'>
      <Sidebar />
      <div className='relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden'>
        <Header />
        <main>
          <div className='mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10'>{children}</div>
        </main>
      </div>
    </div>
  );
};

export default Admin;
