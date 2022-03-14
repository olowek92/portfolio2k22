import React, { FC } from 'react'
import { useNavigate } from 'react-router-dom';
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

    const navigate = useNavigate();

    const handleClickGoContact = ():void => {
      navigate('/contact');
    }

  return (
    <HomeMain>
        <HomeWrap>
            <NameImg src={name} alt="Name"/>
            <Position>web developer</Position>
            <HomeButton onClick={handleClickGoContact}
            >hire me</HomeButton>
        </HomeWrap>
    </HomeMain>
  )
}