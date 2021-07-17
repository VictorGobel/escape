import { useState } from 'react';
import { Theme, ThemeName, themes } from './theme/theme';
import { ThemeUpdateContext } from './context/ThemeUpdateContext'
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { RouterContainer } from './routing/RouterContainer';

function getTheme() {
    const themeFromStorage = window.localStorage.getItem('themeName');

    switch (themeFromStorage) {
        case ThemeName.light:
            return themes[ThemeName.light];
        case ThemeName.dark:
        default:
            return themes[ThemeName.dark]
    }
}

export const App = () => {
    const [theme, setTheme] = useState<Theme>(getTheme())

    return (
        <ThemeUpdateContext.Provider value={{ setTheme }} >
            <ThemeProvider theme={theme}>
                <GlobalStyle />
                <RouterContainer />
            </ThemeProvider>
        </ThemeUpdateContext.Provider>
    );
}

const GlobalStyle = createGlobalStyle`
    body {
        min-height: 100vh;
        background: ${({ theme }: { theme: any }) => theme.color.background};
        color: ${({ theme }: { theme: any }) => theme.color.text};
    }
`