import React, { FC } from 'react';
import { NavElement } from './templates.styles';
import { useChangeBackground } from 'hooks/useChangeBackground';

export const About:FC = ():JSX.Element => {
  useChangeBackground();

  return <NavElement></NavElement>;
};

export const TimberWare:FC = ():JSX.Element => {
  useChangeBackground();

  return <NavElement></NavElement>;
};

export const MebBox:FC = ():JSX.Element => {
  useChangeBackground();

  return <NavElement></NavElement>;
};

export const Contact:FC = ():JSX.Element => {
  useChangeBackground();
  
  return <NavElement></NavElement>;
};