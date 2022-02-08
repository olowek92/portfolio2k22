import React, { FC,useState } from 'react';
import { MenuItem } from 'models/MenuItem';
import { MenuLink,MenuLabel,DropdownLink } from './Menu.styles'

type MenuLinkProps = {
    item: MenuItem
}

const Menu: FC<MenuLinkProps> = ({ item }): JSX.Element => {

  const [submenu, setSubmenu] = useState(false);

  const showSubmenu = (): void => {
    setSubmenu(!submenu)
  }

  return <>
    <MenuLink to={item.path} onClick={showSubmenu}>
      <div>
        {item.icon}
        <MenuLabel>{item.title}</MenuLabel>
      </div>
      <div>{item?.submenu && submenu ? item?.iconOpened : item?.iconClosed}</div>
    </MenuLink>
    {submenu && item?.submenu?.map((submenuItem, index) => {
      return <DropdownLink to={submenuItem.path} key={index} >
        {submenuItem.icon}
        <MenuLabel>{submenuItem.title}</MenuLabel>
      </DropdownLink>
    })}
  </>;
};

export default Menu;
