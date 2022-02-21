import React, { FC } from 'react'
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from 'assets/styles/GlobalStyle';
import { theme } from 'assets/styles/theme';
import Sidebar from 'components/organisms/Sidebar/Sidebar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Contact, MebBox, About, TimberWare } from 'components/templates/templates';


const App:FC = (): JSX.Element => {
    return (
        <Router>
            <ThemeProvider theme={theme}>
                <GlobalStyle />
                <Sidebar />
                <Routes>
                    <Route path='/about' element={<About />}></Route>
                    <Route path='/projects' element={<About />}></Route>
                    <Route path='/projects/timber-ware' element={<TimberWare />}></Route>
                    <Route path='/projects/meb-box' element={<MebBox />}></Route>
                    <Route path='/contact' element={<Contact />}></Route>
                </Routes>
            </ThemeProvider>
        </Router>
    )
}

export default App 
