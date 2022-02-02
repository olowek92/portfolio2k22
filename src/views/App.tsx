import React from 'react'
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from 'assets/styles/GlobalStyle';
import { theme } from 'assets/styles/theme';
import { Test } from './App.styles';

function App(): JSX.Element {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <Test>Siema!</Test>
        </ThemeProvider>
    )
}

export default App 
