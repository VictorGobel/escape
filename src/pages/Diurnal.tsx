import styled, { css, ThemeContext } from 'styled-components';
import { PageTitle } from '../components/PageTitle';
import diurnalIllustration from '../assets/image/diurnal_illustration.png';
import { useContext } from 'react';
import { ThemeUpdateContext } from '../context/ThemeUpdateContext';
import { FiSun } from 'react-icons/fi';
import { FaRegMoon } from 'react-icons/fa';
import { ThemeName, themes } from '../constants/theme';
import { LaserComponent } from '../components/laser/LaserComponent';

export const Diurnal = () => {
    const { setTheme } = useContext(ThemeUpdateContext);
    const theme = useContext(ThemeContext);

    return (
        <>
            <LaserComponent pageIndex={1} />
            <PhotographyContainer>
                <PageTitle title="Rythme nycthéméral"></PageTitle>
                <ContentContainer>
                    <Section delayFactor={1}>
                        <ColumnContainer numberOfColumns={2}>
                            <Column>
                                <Paragraph>
                                    Le nycthémère, ou nyctémère, ou rythme nycthéméral (du grec « nukthêmeron », mot
                                    composé à partir de « nux, nuktos », « nuit », et « hêmera », « jour »), est un
                                    terme technique utilisé en pharmacie, en physiologie, en médecine, en science
                                    vétérinaire ou encore en écologie pour désigner une alternance d'un jour et d'une
                                    nuit correspondant à un cycle biologique de 24 heures.
                                </Paragraph>
                                <Paragraph>
                                    Ce cycle inclut chez la plupart des espèces complexes une période de veille et une
                                    période de sommeil, ce qui correspond respectivement à un jour et une nuit pour les
                                    espèces diurnes et à l'inverse pour les espèces strictement nocturnes.
                                </Paragraph>
                            </Column>
                            <Column>
                                <Image src={diurnalIllustration} />
                            </Column>
                        </ColumnContainer>

                        <ColumnContainer numberOfColumns={1}>
                            <Column>
                                <Paragraph>
                                    On parle pour les espèces vivantes de rythme nycthéméral et de cycle nycthéméral.
                                    Ces cycles sont régulés par les variations rythmiques et naturelles de luminosité
                                    (intensité, durée du jour), avec parfois une influence de la température.
                                </Paragraph>
                                <Paragraph>
                                    Le rythme nycthéméral ne doit pas être confondu avec le rythme circadien,
                                    d'approximativement 24 h, qui est déterminé par des causes endogènes (horloges
                                    biologiques). Le rythme circadien peut par exemple concerner des individus isolés du
                                    monde extérieur, ou des espèces vivant dans les grandes profondeurs terrestres ou
                                    marines.
                                </Paragraph>
                            </Column>
                        </ColumnContainer>
                    </Section>
                    <Section delayFactor={2}>
                        <ColumnContainer numberOfColumns={1}>
                            <Title>Nycthémère et alimentation des espèces</Title>
                            <Column>
                                <Paragraph>
                                    De nombreuses espèces, même considérées comme diurnes (lapin, lièvre, canard
                                    colvert, etc.) se nourrissent essentiellement de{' '}
                                    <ThemeChangerContainer onClick={() => setTheme(themes.Dark)}>
                                        nuit{theme.name === ThemeName.Light && <FaRegMoon size={15} />}
                                    </ThemeChangerContainer>
                                    , y compris sous l'eau. Sous l'eau ce temps de nourrissage correspond aussi au pic
                                    de dérive planctonique et des jeunes poissons.
                                </Paragraph>
                                <Paragraph>
                                    On a récemment découvert que dans les cours d'eau, la temporalité du comportement de
                                    recherche de proies correspond naturellement – chez les prédateurs étudiés – aux
                                    périodes de dérives observées chez leurs proies. Une étude (INRA) portant sur la
                                    truite a par exemple conclu à de bonnes corrélations entre le rythme d'activité (et
                                    de dérive) des invertébrés aquatiques et le rythme d'alimentation de la truite.
                                    Ainsi la truite se nourrit-elle essentiellement à la tombée de la nuit puis en début
                                    de matinée (en ingérant quotidiennement une ration alimentaire correspondant à 6% de
                                    son poids sec).
                                </Paragraph>
                            </Column>
                        </ColumnContainer>
                    </Section>
                    <Section delayFactor={3}>
                        <ColumnContainer numberOfColumns={1}>
                            <Title>Rythmes nycthéméraux et écologie du paysage</Title>
                            <Column>
                                <Paragraph>
                                    L'importance physiologique et écologique de ces rythmes donne aussi une importance
                                    nouvelle à la prise en compte de la qualité de l'environnement nocturne dans les
                                    réseaux écologiques et pour l'établissement, la protection ou la gestion de
                                    corridors biologiques. Ces derniers pour être fonctionnels ne devraient donc pas
                                    être exposés à la pollution lumineuse, dans toute la mesure du possible, y compris
                                    et notamment pour les « trames bleues » telles que promues en France par le Grenelle
                                    de l'environnement en 2007.
                                </Paragraph>
                            </Column>
                        </ColumnContainer>
                    </Section>
                    <Section delayFactor={4}>
                        <ColumnContainer numberOfColumns={1}>
                            <Title>Nycthémère et système hormonal</Title>
                            <Column>
                                <Paragraph>
                                    La mélatonine est une hormone commune dans le monde animal, qui intervient dans la
                                    synchronisation du rythme biologique sur la durée{' '}
                                    <ThemeChangerContainer onClick={() => setTheme(themes.Light)}>
                                        jour{theme.name === ThemeName.Dark && <FiSun size={15} />}
                                    </ThemeChangerContainer>
                                    /nuit qui varie selon les saisons, et la position géographique du sujet concerné
                                    (d'autant plus qu'il est proche des pôles et éloigné de l'équateur).
                                </Paragraph>
                                <Paragraph>
                                    Certaines professions occasionnent ce qu'on appelle des « troubles » du nycthémère
                                    notamment le travail de nuit et les travaux en horaires décalés (pilotes d'avion,
                                    steward, conducteur de trains, chauffeurs routiers, infirmier, etc.)
                                </Paragraph>
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
    border-bottom: 1px solid ${({ theme }) => theme.color.text};
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
const ThemeChangerContainer = styled.span`
    cursor: pointer;
    font-weight: bold;
`;
