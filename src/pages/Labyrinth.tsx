import styled, { css } from 'styled-components';
import { PageTitle } from '../components/PageTitle';
import { useEffect, useRef, useState } from 'react';
import { LaserComponent } from '../components/laser/LaserComponent';
import { LabyrinthCanvas } from 'components/labyrinth/LabyrinthCanvas';
import { Inputs } from 'components/labyrinth/gameObjects/Inputs';

export type NextPosition = {
    gridX: number;
    gridY: number;
    mapIndex: number;
    floor: number;
};

export const Labyrinth = () => {
    const [nextPosition, setNextPosition] = useState<NextPosition>({
        floor: 1,
        gridX: 15,
        gridY: 23,
        mapIndex: 1,
    });
    const inputsRef = useRef<Inputs>(new Inputs());
    const inputs = inputsRef.current;

    useEffect(() => {
        // 👇️ remove the event listener when component unmounts
        inputs.init();
        return () => {
            inputs.unmount();
        };
    }, []);

    return (
        <>
            <LaserComponent pageIndex={3} />
            <PhotographyContainer>
                <PageTitle title="Labyrinthe"></PageTitle>
                <ContentContainer>
                    <Section delayFactor={1}>
                        <ColumnContainer numberOfColumns={2}>
                            <Column>
                                <Paragraph>
                                    Un labyrinthe (λαϐύρινθος ou λαβύρινθος / labúrinthos en grec ancien, labyrinthus en
                                    latin) est un tracé sinueux, muni ou non d'embranchements, d'impasses et de fausses
                                    pistes, destiné à perdre ou à ralentir celui qui cherche à s'y déplacer.
                                </Paragraph>
                                <Paragraph>
                                    Le mot désigne dans la mythologie grecque une série complexe de galeries construites
                                    par Dédale pour enfermer le Minotaure. En latin, labyrinthus signifie « enclos de
                                    bâtiments dont il est difficile de trouver l’issue ».
                                </Paragraph>
                                <Paragraph>
                                    De nos jours, le terme de labyrinthe désigne une organisation complexe, tortueuse,
                                    concrète (architecture, urbanisme, jardins, paysages...) ou abstraite (structures,
                                    façons de penser...), où la personne peut se perdre. Le cheminement du labyrinthe
                                    est difficile à suivre et à saisir dans sa globalité.
                                </Paragraph>
                            </Column>
                            <Column>
                                <LabyrinthCanvas
                                    mapIndex={0}
                                    inputs={inputs}
                                    nextPosition={nextPosition}
                                    setNextPosition={setNextPosition}
                                />
                            </Column>
                        </ColumnContainer>
                    </Section>
                    <Section delayFactor={2}>
                        <ColumnContainer numberOfColumns={1}>
                            <Title>Étymologie</Title>
                            <Column>
                                <Paragraph>
                                    L'origine du mot est vraisemblablement préhellénique, et plus précisément
                                    indo-européenne, se traduisant par le « tout-en-pierres ». On a tenté autrefois
                                    divers rapprochements étymologiques, par exemple avec le terme grec labrys, nom de
                                    la hache crétoise à double tranchant, avec laquelle aurait été creusé le labyrinthe.
                                    La forme la plus ancienne connue est da-phu-ri-to- en mycénien de Cnossos.
                                </Paragraph>
                            </Column>
                        </ColumnContainer>
                    </Section>
                    <Section delayFactor={3}>
                        <LabyrinthCanvas
                            mapIndex={1}
                            inputs={inputs}
                            nextPosition={nextPosition}
                            setNextPosition={setNextPosition}
                        />
                    </Section>
                    <Section delayFactor={4}>
                        <ColumnContainer numberOfColumns={1}>
                            <Title>Les différents types de labyrinthes</Title>
                            <Column>
                                <Paragraph>
                                    L'auteur italien Umberto Eco, dont on connaît la passion pour la sémiotique et les
                                    intrigues labyrinthiques — le labyrinthe du roman Le Nom de la rose est un
                                    labyrinthe maniériste et celui où vit Guillaume est suggéré comme étant un rhizome ;
                                    les labyrinthes suggérés dans le roman ne sont toutefois pas spatiaux, mais mentaux
                                    — définit trois types de labyrinthe :
                                </Paragraph>
                                <Paragraph>
                                    - Le labyrinthe de la mythologie grecque est un labyrinthe « unicursal », dont le
                                    parcours, de l'entrée au centre, ne compte pas d'impasse. « Si le labyrinthe
                                    classique était déroulé, on obtiendrait un fil unique : la légende du fil d'Ariane
                                    est curieuse, comme s'il fallait un fil pour s'orienter dans le labyrinthe
                                    classique. »
                                </Paragraph>
                                <Paragraph>
                                    - Le labyrinthe « maniériste » déroulé, quant à lui, se présenterait comme un arbre,
                                    « un arbre binaire, du type de celui qu'utilisent les grammairiens et les
                                    informaticiens ». Il présente un grand nombre de voies mais toutes, exceptée une,
                                    mènent à des cul-de-sac. C'est un processus d'interrogation, de tentative et
                                    d'erreur, mais qui possède une rationalité immanente qui est la rationalité binaire
                                    et qui peut être décrite en termes d'algèbre de Boole. Une variable booléenne ne
                                    peut être que vraie ou fausse. De manière générale lorsqu'il y a N inconnues
                                    binaires, il existe 2N hypothèses complètes possibles.
                                </Paragraph>
                                <Paragraph>
                                    - Le labyrinthe en « rhizome » ou « labyrinthe hermétique », un réseau entrelacé et
                                    infini de voies dans lequel tout point est connecté à divers autres points mais où
                                    rien n'empêche l'instauration, entre deux nœuds, de nouvelles liaisons, même entre
                                    ceux qui n'étaient pas reliés avant. Chaque route peut être la bonne, pourvu qu'on
                                    veuille aller du côté où on va. Le rhizome est donc le lieu des conjectures, des
                                    paris et des hasards, des hypothèses globales qui doivent être continuellement
                                    reposées, car une structure en rhizome change sans cesse de forme.
                                </Paragraph>
                            </Column>
                        </ColumnContainer>
                    </Section>
                    <Section delayFactor={5}>
                        <ColumnContainer numberOfColumns={1}>
                            <Title>Sortir d'un labyrinthe</Title>
                            <Column>
                                <Paragraph>
                                    Une ruse simple pour trouver la sortie (un trou) d'un labyrinthe consiste à longer
                                    en continu soit le mur de droite, ou le mur de gauche du labyrinthe (par exemple en
                                    laissant les touches directionnelles de manière à garder son personnage sur le mur
                                    sans jamais l'enlever).
                                </Paragraph>
                                <Paragraph>
                                    Cette technique ne permet cependant pas d'accéder, par exemple, au centre d'un
                                    labyrinthe dit « à îlots » (ou encore de sortir d'un tel labyrinthe lorsque l'on
                                    atterrit en son centre) : en effet, dans de tels labyrinthes, le centre n'est pas
                                    rattaché au reste du labyrinthe, et on tourne donc en rond lorsque l'on longe les
                                    murs.
                                </Paragraph>
                            </Column>
                        </ColumnContainer>
                    </Section>
                    <Section delayFactor={6}>
                        <ColumnContainer numberOfColumns={1}>
                            <Column>
                                <LabyrinthCanvas
                                    mapIndex={2}
                                    inputs={inputs}
                                    nextPosition={nextPosition}
                                    setNextPosition={setNextPosition}
                                />
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
    margin-top: 50px;
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
    margin-top: 50px;

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
    margin-top: 50px;

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
        margin-top: 25px;
    }
`;

const Column = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;

    & > :not(:first-child) {
        margin-top: 25px;
    }
`;

const Paragraph = styled.p`
    text-indent: 40px;
    text-align: justify;
    margin: 0;
`;
