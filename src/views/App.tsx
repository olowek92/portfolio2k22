import React, { FC } from 'react'
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from 'assets/styles/GlobalStyle';
import { theme } from 'assets/styles/theme';
import Sidebar from 'components/organisms/Sidebar/Sidebar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { MebBox } from 'components/templates/templates';
import { About } from 'components/templates/About/About';
import { Home } from 'components/templates/Home/Home';
import { Contact } from 'components/templates/Contact/Contact';
import { Swiper } from 'components/organisms/Swiper/Swiper';
import Footer from 'components/molecules/Footer/Footer';
import pic1 from 'assets/images/pic1.jpg';
import pic2 from 'assets/images/pic2.jpg';
import pic3 from 'assets/images/pic3.jpg';
import pic4 from 'assets/images/pic4.jpg';
import pic5 from 'assets/images/pic5.jpg';


const App:FC = (): JSX.Element => {

    const items = [
        {
        imageSrc: pic1,
        imageAlt: 'something-1'
        },
        {
            imageSrc: pic2,
            imageAlt: 'something-2'
        },
        {
            imageSrc: pic3,
            imageAlt: 'something-3'
        },
        {
            imageSrc: pic4,
            imageAlt: 'something-4'
        },
        {
            imageSrc: pic5,
            imageAlt: 'something-5'
        },
    ];

    return (
        <Router>
            <ThemeProvider theme={theme}>
                <GlobalStyle />
                <Sidebar />
                <Routes>
                    <Route path='/' element={<Home />}></Route>
                    <Route path='/about' element={<About />}></Route>
                    <Route path='/projects' element={<Swiper items={items} />}></Route>
                    <Route path='/projects/timber-ware' element={<Swiper items={items} />}></Route>
                    <Route path='/projects/meb-box' element={<MebBox />}></Route>
                    <Route path='/contact' element={<Contact />}></Route>
                </Routes>
                <Footer />
            </ThemeProvider>
        </Router>
    )
}

export default App 
