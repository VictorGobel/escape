import { useContext, useState } from 'react';
import styled, { keyframes, ThemeContext } from 'styled-components';
import { ThemeName } from '../../constants/theme';
import pokeball from '../../assets/image/pokeball.svg';
import po from '../../assets/image/po.png';
import { ReactComponent as PokeballSvg } from '../../assets/image/pokeball.svg';

type ParticleResults = number[];
enum ParticleResult {
    Orange = 'orange',
    Green = 'green',
    Blue = 'lightblue',
    Purple = 'purple',
}

const startingParticleResults: number[] = [0, 0, 0, 0];

function setParticleResultsToStorage(particleResults: ParticleResults) {
    window.localStorage.setItem('particleResults', JSON.stringify(particleResults));
}

function getParticleResultsFromStorage(): ParticleResults {
    const particleResultsRaw = window.localStorage.getItem('particleResults');
    const particleResults = particleResultsRaw ? JSON.parse(particleResultsRaw) : [];
    if (!particleResults.length) {
        setParticleResultsToStorage(startingParticleResults);

        return startingParticleResults;
    }

    return particleResults;
}

export const ParticlesAnswerComponent = () => {
    const theme = useContext(ThemeContext);
    const [particleResults, setParticleResults] = useState<ParticleResults>(getParticleResultsFromStorage());

    function changeParticleResult(index: number) {
        console.log('aaa');
        const newParticleRestuls = [...particleResults];
        newParticleRestuls[index] += 1;
        if (newParticleRestuls[index] >= Object.values(ParticleResult).length) {
            newParticleRestuls[index] = 0;
        }

        console.log(newParticleRestuls);

        setParticleResults(newParticleRestuls);
        setParticleResultsToStorage(newParticleRestuls);
    }

    return (
        <Container>
            {particleResults.map((result, index) => (
                <Result
                    key={index}
                    color={Object.values(ParticleResult)[result]}
                    onClick={() => changeParticleResult(index)}
                >
                    <PokeballSvg onClick={() => changeParticleResult(index)} />
                </Result>
            ))}
        </Container>
    );
};

const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;
const Result = styled.div<{ color: string }>`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    color: ${({ color }) => color};
    height: 50px;
    width: 50px;
    margin: 20px;
    cursor: pointer;
`;
