import styled, { css } from 'styled-components';
import { PageTitle } from '../components/PageTitle';
import { useContext } from 'react';
import { MailsContext } from '../context/MailsContext';
import { LaserComponent } from '../components/laser/LaserComponent';

export const Contact = () => {
    const { addMail } = useContext(MailsContext);

    return (
        <>
            <LaserComponent pageIndex={4} />
            <PhotographyContainer>
                <PageTitle title="Contact"></PageTitle>
                <ContentContainer>
                    <Section delayFactor={1}>
                        <ColumnContainer numberOfColumns={1}>
                            <Column>
                                <Paragraph>
                                    Bonjour, si certains sujets sur mon site vous semblent encore obscure et que vous
                                    souhaitez me poser des questions, alors n'hésitez pas.
                                </Paragraph>
                                <Input placeholder="Votre adresse mail" />
                                <TextArea placeholder="Votre question" rows={20} />
                            </Column>
                        </ColumnContainer>
                    </Section>
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
    width: 60%;
    margin: auto;
`;

const Title = styled.div`
    font-family: 'ZenTokyoZoo';
    text-transform: uppercase;
    border-bottom: 1px solid ${({ theme }) => theme.text};
    padding: 2px 10px;
`;

const Section = styled.div<{ delayFactor: number }>`
    margin-top: 30px;

    animation: 0.5s ease-out ${({ delayFactor }) => 0.2 * delayFactor}s fadeIn;
    animation-fill-mode: both;

    @keyframes fadeIn {
        from {
            opacity: 0;
            transform: translateY(40px);
        }

        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;

const ColumnContainer = styled.div<{ numberOfColumns: number }>`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin-top: 30px;

    & > * {
        ${({ numberOfColumns }) => css`
            width: calc(
                (100% - ${20 * (numberOfColumns - 1)}px) / ${numberOfColumns}
            ); // There are (numberOfColumns - 1) margin-lefts to spread over numberOfColumns columns
        `};
    }

    & > :not(:nth-child(${({ numberOfColumns }) => numberOfColumns}n + 1)) {
        margin-left: 20px;
    }

    & > :nth-child(n + ${({ numberOfColumns }) => numberOfColumns + 1}) {
        margin-top: 15px;
    }
`;

const Column = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;

    & > :not(:first-child) {
        margin-top: 15px;
    }
`;

const Paragraph = styled.p`
    text-indent: 40px;
    text-align: justify;
    margin: 0;
`;

const Image = styled.img`
    width: 100%;
`;

const Input = styled.input`
    padding: 5px;
    font-family: inherit;
    font-size: inherit;
`;

const TextArea = styled.textarea`
    padding: 5px;
    font-family: inherit;
    font-size: inherit;
    resize: none;
`;
