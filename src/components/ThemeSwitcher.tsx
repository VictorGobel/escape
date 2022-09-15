import React from 'react';
import styled, { ThemeContext } from 'styled-components';
import { FiSun } from 'react-icons/fi';
import { useContext } from 'react';
import { ThemeUpdateContext } from '../context/ThemeUpdateContext';
import { ThemeName, themes } from '../constants/theme';

export const ThemeSwitcher = () => {
    const { setTheme } = useContext(ThemeUpdateContext);
    const theme = useContext(ThemeContext);

    return (
        <Container>
            {theme.name === ThemeName.Dark && <FiSun onClick={() => setTheme(themes.Light)} />}
            {theme.name === ThemeName.Light && <FiSun onClick={() => setTheme(themes.Dark)} />}
        </Container>
    );
};

const Container = styled.div``;
