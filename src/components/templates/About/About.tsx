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
                Since the beginning of 2019, I have been in constant contact with the IT industry.
                I try to educate myself every day, both through courses and implementing projects. 
                JavaScript in conjunction with the React framework and 
                many libraries is the environment in which it is most often found.
                At the end of 2021, I decided to learn the Solidity language and started implementing two courses.
                In my spare time I like to ride a motorcycle and play football.
                Do you have an interesting job offer or do you need a person who will create a website for you? 
                Please do not hesitate to contact me. 
            </AboutDescription>
        </AboutWrap>
    </AboutMain>
  )
}