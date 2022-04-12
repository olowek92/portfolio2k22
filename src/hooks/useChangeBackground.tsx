import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { MenuData } from 'data/MenuData';
import homeBackground from 'assets/images/bcg_all_back_with_person_main.png';

const desktop = window.matchMedia('(min-width: 992px)');

export const useChangeBackground = ():void => {
  const location = useLocation();
  
    useEffect(():void => {
      if(desktop.matches) {
        MenuData.map(( item ) => {
          if(location.pathname === item.path) {
            document.body.style.backgroundImage = `url(${item.background})`;
          } else if(location.pathname === '/') {
            document.body.style.backgroundImage = `url(${homeBackground})`;
          } else {
            item.submenu 
            ? item.submenu.map(( subItem ) => {
              if(location.pathname === subItem.path) {
                document.body.style.backgroundImage = `url(${subItem.background})`;
              }
            }) 
            : null;
          }
        })
      }
    }, [location])    
  }