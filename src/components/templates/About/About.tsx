import React, { FC } from 'react'
import { useChangeBackground } from 'hooks/useChangeBackground';
import { AboutMain, AboutWrap, AboutHeader, AboutDescription } from './About.styles';

export const About:FC = ():JSX.Element => {
useChangeBackground();

  return (
    <AboutMain>
        <AboutWrap>
            <AboutHeader>About me</AboutHeader>
            <AboutDescription>
              Since the beginning of 2019 I have had a connection with the IT industry.
              I have been striving to develop my skills every day through numerous training courses as well as by completing a great deal of projects.
              I’m in my element while using JavaScript in conjunction with React and other libraries.
              Towards the end of 2021 I also decided to learn the language of Solidity and therefore enrolled for the course.
              <br></br>
              <br></br>
              If you have a tempting job offer or need someone who would create a website for you feel free to reach out.
            </AboutDescription>
        </AboutWrap>
    </AboutMain>
  )
}