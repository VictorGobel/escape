import styled, { css, ThemeContext } from 'styled-components';
import { PageTitle } from '../components/PageTitle';
import diurnalIllustration from '../assets/image/diurnal_illustration.png';
import { useContext } from 'react';
import { ThemeUpdateContext } from '../context/ThemeUpdateContext';
import { FiSun } from 'react-icons/fi';
import { FaRegMoon } from 'react-icons/fa';
import { ThemeName, themes } from '../constants/theme';
import { LaserComponent } from '../components/laser/LaserComponent';
import { ImageParticlesComponent } from '../components/imageParticles/ImageParticlesComponent';
import { ParticlesAnswerComponent } from 'components/imageParticles/ParticlesAnswerComponent';

export const Sokoban = () => {
    const { setTheme } = useContext(ThemeUpdateContext);
    const theme = useContext(ThemeContext);

    return (
        <>
            <LaserComponent pageIndex={2} />
            <PhotographyContainer>
                <PageTitle title="Sokoban"></PageTitle>
                <ContentContainer>
                    <ParticlesAnswerComponent />
                    <ImageParticlesComponent imageIndex={3} />
                    <ImageParticlesComponent imageIndex={2} />
                    <ImageParticlesComponent imageIndex={0} />
                    <ImageParticlesComponent imageIndex={1} />
                </ContentContainer>
            </PhotographyContainer>
        </>
    );
};

const PhotographyContainer = styled.div`
    flex-grow: 1;
    padding: 30px;
`;

const ContentContainer = styled.div`
    margin-top: 30px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;
