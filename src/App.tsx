import { useState } from 'react';
import { Theme, ThemeName, themes } from './constants/theme';
import { ThemeUpdateContext } from './context/ThemeUpdateContext';
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';
import { RouterContainer } from './routing/RouterContainer';
import { Mail, startingMails } from './constants/mail';
import { MailsContext } from './context/MailsContext';

function getThemeFromStorage() {
    const themeFromStorage = window.localStorage.getItem('themeName');

    switch (themeFromStorage) {
        case ThemeName.Dark:
            return themes[ThemeName.Dark];
        case ThemeName.Light:
        default:
            return themes[ThemeName.Light];
    }
}

function setMailsToStorage(mails: Mail[]) {
    window.localStorage.setItem('mails', JSON.stringify(mails));
}

function getMailsFromStorage(): Mail[] {
    const mailsRaw = window.localStorage.getItem('mails');
    const mails = mailsRaw ? JSON.parse(mailsRaw) : [];
    if (!mails.length) {
        setMailsToStorage(startingMails);

        return startingMails;
    }

    return mails.map((mail: Mail) => ({ ...mail, receivedAt: new Date(mail.receivedAt) }));
}

export const App = () => {
    const [theme, setTheme] = useState<Theme>(getThemeFromStorage());
    const [mails, setMails] = useState<Mail[]>(getMailsFromStorage());

    function setThemeAndUpdateLocalStorage(theme: Theme) {
        window.localStorage.setItem('themeName', theme.name);
        setTheme(theme);
    }

    function fetchMails() {
        setMails(getMailsFromStorage);
    }

    function addMail(mail: Mail) {
        const newMails = [...mails, mail];
        setMailsToStorage(newMails);
        setMails(newMails);
    }

    return (
        <ThemeUpdateContext.Provider value={{ setTheme: setThemeAndUpdateLocalStorage }}>
            <MailsContext.Provider value={{ addMail, fetchMails, mails }}>
                <ThemeProvider theme={theme}>
                    <GlobalStyle />
                    <AppContainer>
                        <RouterContainer />
                    </AppContainer>
                </ThemeProvider>
            </MailsContext.Provider>
        </ThemeUpdateContext.Provider>
    );
};

const GlobalStyle = createGlobalStyle`
    body, #root {
        font-family: 'Roboto';
        line-height: 1.5;
        height: 100vh;
        width: 100vw;
        background: ${({ theme }: { theme: any }) => theme.color.background};
        color: ${({ theme }: { theme: any }) => theme.color.text};
    }
`;

const AppContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    overflow: auto;
`;
