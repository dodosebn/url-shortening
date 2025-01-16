import React from 'react'
import { FooterItemProps } from '@/types';
const FooterItem: React.FC<FooterItemProps> = ({itemId, title, itemName}) => {
  return (
    <ul key={itemId}>
     <li className={`${itemName === title ? 'text-2xl font-bold text-white' : 'text-foottxt hover:text-cyan'} pt-3 `}>{itemName}
                       
                       </li>
    </ul>
  )
}

export default FooterItem;
