import React, { FC, useState } from 'react';
import { Nav,NavLogo, MenuDesktop, NavIcon, SidebarNav, SidebarWrap  } from './Sidebar.styles';
import { IconContext } from "react-icons";
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { MenuData } from 'data/MenuData';
import Menu from 'components/molecules/Menu/Menu';
import logo from 'assets/images/logo.png'

const Sidebar:FC = (): JSX.Element => {

  const [sidebar, setSidebar] = useState(false); 

  const showSidebar = (): void => {
      setSidebar(!sidebar)
  }

  return (
    <IconContext.Provider value={{ color: "#fff" }}>
      <Nav >
        <NavLogo src={logo} />
        <MenuDesktop>
          {MenuData.map(( item, index ) => {
            return <Menu item={item} key={index} />
          })}
        </MenuDesktop> 
        <NavIcon onClick={showSidebar}>
          <AiOutlineMenu />
        </NavIcon>
      </Nav>
      <SidebarNav sidebar={sidebar}>
        <SidebarWrap>
          <NavIcon onClick={showSidebar}>
            <AiOutlineClose />
          </NavIcon>
          {MenuData.map(( item, index ) => {
            return <Menu item={item} key={index} />
          })}
        </SidebarWrap>
      </SidebarNav>
    </IconContext.Provider>  
  )
}

export default Sidebar;
 