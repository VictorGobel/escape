import React from 'react';
import styled from 'styled-components';

export const PageTitle = ({ title, children }: { title?: string; children?: React.ReactNode }) => {
    return (
        <TitleContainer>
            {title &&
                title.split('').map((letter, index) => (
                    <LetterContainer key={index} index={index}>
                        {letter === ' ' ? <>&nbsp;</> : letter}
                    </LetterContainer>
                ))}
            {children}
        </TitleContainer>
    );
};

const TitleContainer = styled.div`
    font-family: 'ZenTokyoZoo';
    font-size: 30px;
    text-align: center;
    text-transform: uppercase;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    overflow: hidden;
`;

const LetterContainer = styled.div<{ index: number }>`
    animation: 0.7s ease-out ${({ index }) => 0.03 * index}s letterIn;
    animation-fill-mode: both;

    @keyframes letterIn {
        from {
            opacity: 0;
            transform: translateY(70px) translateX(20px) rotateZ(180deg);
        }

        to {
            opacity: 1;
            transform: translateY(0) translateX(0) rotateZ(0deg);
        }
    }
`;
