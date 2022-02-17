import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { MenuData } from 'data/MenuData';

const desktop = window.matchMedia('(min-width: 992px)');

export const useChangeBackground = ():void => {
  const location = useLocation();
  
    useEffect(():void => {
      if(desktop.matches) {
        MenuData.map(( item ) => {
          if(location.pathname === item.path) {
            document.body.style.backgroundImage = `url(${item.background})`;
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