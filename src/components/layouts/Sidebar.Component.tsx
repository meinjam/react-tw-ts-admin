import { Link } from 'react-router-dom';
import { FaRegUser } from 'react-icons/fa';
import { FaChevronDown, FaBahai } from 'react-icons/fa6';

const Sidebar = () => {
  return (
    <aside className='text-p-white absolute left-0 top-0 z-9999 flex h-screen w-72 flex-col overflow-y-hidden bg-black duration-300 ease-linear dark:bg-boxdark lg:static lg:translate-x-0 -translate-x-full'>
      <div className='py-5 px-8'>
        <Link to='/' className='text-3xl text-center block'>
          Admin Panel
        </Link>
      </div>
      <div>
        <ul className='space-y-2'>
          <li>
            <Link to='/admin/users' className='sidebar-link'>
              <FaRegUser />
              <span>Users</span>
              <FaChevronDown className='ml-auto' />
            </Link>
          </li>
          <li>
            <a href='/admin/products' className='sidebar-link'>
              <FaBahai />
              <span>Products</span>
            </a>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
