import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaChevronDown } from 'react-icons/fa6';
import { menus } from '@/components/layouts/SidebarMenus';
import { cn } from '@/lib/cn';

const Sidebar = () => {
  const [expandedMenus, setExpandedMenus] = useState<{ [key: number]: boolean }>({});

  const toggleMenu = (index: number) => {
    setExpandedMenus((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  return (
    <aside className='absolute left-0 top-0 z-9999 flex h-screen w-72 flex-col overflow-y-hidden ease-linear lg:static lg:translate-x-0 -translate-x-full border-r-2 bg-background'>
      <div className='py-5 px-8'>
        <Link to='/' className='text-3xl text-center block'>
          Admin Panel
        </Link>
      </div>
      <div className='no-scrollbar flex flex-col overflow-y-auto ease-linear'>
        <nav className='mt-5 py-4 lg:mt-9'>
          <ul className='space-y-3'>
            {menus.super_admin.map((menu, i) => (
              <li key={i}>
                {menu.children.length > 0 ? (
                  <div className='flex items-center cursor-pointer sidebar-link' onClick={() => toggleMenu(i)}>
                    {menu.icon}
                    <span>{menu.name}</span>
                    {menu.children.length > 0 && (
                      <FaChevronDown className={cn('ml-auto duration-300', expandedMenus[i] ? 'rotate-180' : '')} />
                    )}
                  </div>
                ) : (
                  <a href='#' className='flex items-center cursor-pointer sidebar-link'>
                    {menu.icon}
                    <span>{menu.name}</span>
                  </a>
                )}

                {menu.children.length > 0 && (
                  <ul
                    className={cn(
                      'pl-5 overflow-hidden transition-all duration-300 ease-in-out',
                      expandedMenus[i] ? 'max-h-96' : 'max-h-0'
                    )}
                    // style={{ maxHeight: expandedMenus[i] ? '10rem' : '0' }}
                  >
                    {menu.children.map((item, j) => (
                      <li key={j}>
                        <a href='#' className='sidebar-sub-link'>
                          <span className='bg-current size-1 rounded-full'></span>
                          <span>Sub Menu {item}</span>
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
