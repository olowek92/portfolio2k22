import React, { FC } from 'react'
import { 
    HomeMain,
    HomeWrap, 
    NameImg, 
    Position, 
    HomeButton 
} from './Home.styles';
import name from 'assets/images/Name.png';
import { useChangeBackground } from 'hooks/useChangeBackground';

export const Home: FC = ():JSX.Element => {
    useChangeBackground();

  return (
    <HomeMain>
        <HomeWrap>
            <NameImg src={name} alt="Name"/>
            <Position>web developer</Position>
            <HomeButton onClick={() => {}}
            >zatrudnij mnie</HomeButton>
        </HomeWrap>
    </HomeMain>
  )
}