import React, { createContext, useState, useMemo } from 'react';
import { createTheme, ThemeProvider as MuiThemeProvider } from '@mui/material/styles';

const ThemeContext = createContext();

const ThemeContextCustom = ({ children }) => {
    const [themeMode, setThemeMode] = useState('dark');

    const toggleTheme = () => {
        setThemeMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
    };

    const theme = useMemo(
        () =>
            createTheme({
                palette: {
                    mode: themeMode,
                    primary: themeMode === 'light' ? {
                        main: '#000',
                        blue: '#024E82',
                        border: '#3C3C3C',
                        contrastText: ''
                    } : {
                        main: '#000',
                        blue: '#024E82',
                        border: '#3C3C3C',
                        dark: '',
                        contrastText: ''
                    },
                    typography: {
                        fontFamily1: '"Jost", sans-serif'
                    },
                    background: themeMode === 'light' ? {
                        default: '#fff',
                        brownDark: '#23201E',
                        paper: '#fff'
                    } : {
                        default: '#000',
                        brownDark: '#23201E',
                        paper: '#fff'
                    }
                },
            }),
        [themeMode]
    );

    return (
        <ThemeContext.Provider value={{ themeMode, toggleTheme }}>
            <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>
        </ThemeContext.Provider>
    );
};

export { ThemeContextCustom, ThemeContext };
