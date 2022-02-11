import React, { FC,useState } from 'react';
import { MenuItem } from 'models/MenuItem';
import { MenuLink,MenuLabel, SubmenuIconWrap, DropdownLink, DropdownLinkWrap } from './Menu.styles'

type MenuLinkProps = {
    item: MenuItem
}

const Menu: FC<MenuLinkProps> = ({ item }): JSX.Element => {

  const [submenu, setSubmenu] = useState(false);

  const showSubmenu = (): void => {
    setSubmenu(!submenu)
  }

  return (
    <div>
      <MenuLink to={item.path} onClick={showSubmenu}>
        <div>
          {item.icon}
          <MenuLabel>{item.title}</MenuLabel>
        </div>
        {item?.submenu && submenu 
        ? <SubmenuIconWrap>{item?.iconOpened}</SubmenuIconWrap> 
        : <SubmenuIconWrap>{item?.iconClosed}</SubmenuIconWrap>}
      </MenuLink>
      <DropdownLinkWrap>
      {submenu && item?.submenu?.map((submenuItem, index) => {
        return (
          <DropdownLink to={submenuItem.path} key={index} >
            {submenuItem.icon}
            <MenuLabel>{submenuItem.title}</MenuLabel>
          </DropdownLink>
        )
      })}
      </DropdownLinkWrap>
    </div>
  )
};

export default Menu;
