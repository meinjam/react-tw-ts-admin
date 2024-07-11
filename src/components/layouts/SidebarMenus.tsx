import { FaRegUser } from 'react-icons/fa';
import { FaBahai } from 'react-icons/fa6';
import { IoTicketOutline } from 'react-icons/io5';

export const menus = {
  super_admin: [
    {
      name: 'users',
      href: '/admin/users',
      children: [1, 2, 3],
      icon: <FaRegUser />,
    },
    {
      name: 'products',
      href: '/admin/products',
      children: [],
      icon: <FaBahai />,
    },
    {
      name: 'invoice',
      href: '/admin/invoice',
      icon: <IoTicketOutline />,
      children: [1, 2, 6, 7, 4, 4, 1, 2, 6, 7, 4, 4, 1, 2, 6, 7, 4, 4, 1, 2, 6, 7, 4, 4, 1, 2, 6, 7, 4, 4],
    },
  ],
  admin: [],
  user: [],
};
