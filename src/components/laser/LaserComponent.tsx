import { useContext, useState } from 'react';
import styled, { keyframes, ThemeContext } from 'styled-components';
import { ThemeName } from '../../constants/theme';
import { LaserDisplay } from './LaserDisplay';

type Mirrors = Mirror[][];
enum MirrorPosition {
    Vertical = 'Vertical',
    Horizontal = 'Horizontal',
    DiagonalToBottom = 'DiagonalToBottom',
    DiagonalToTop = 'DiagonalToTop',
    None = 'None',
}
type Mirror = {
    positions: MirrorPosition[];
    positionIndex: number;
};

type LaserPathPoint = { column: number; row: number };

const startingMirrors: Mirrors = new Array(10).fill(
    new Array(5).fill({
        positions: [
            MirrorPosition.Horizontal,
            MirrorPosition.DiagonalToBottom,
            MirrorPosition.Vertical,
            MirrorPosition.DiagonalToTop,
            MirrorPosition.None,
        ],
        positionIndex: 0,
    })
);

function setMirrorsToStorage(mirrors: Mirrors) {
    window.localStorage.setItem('mirrors', JSON.stringify(mirrors));
}

function getMirrorsFromStorage(): Mirrors {
    const mirrorsRaw = window.localStorage.getItem('mirrors');
    const mirrors = mirrorsRaw ? JSON.parse(mirrorsRaw) : [];
    if (!mirrors.length) {
        setMirrorsToStorage(startingMirrors);

        return startingMirrors;
    }

    return mirrors;
}

function getRotationForPosition(positionIndex: MirrorPosition) {
    switch (positionIndex) {
        case MirrorPosition.Vertical:
            return 0;
        case MirrorPosition.Horizontal:
            return 90;
        case MirrorPosition.DiagonalToBottom:
            return -45;
        case MirrorPosition.DiagonalToTop:
            return 45;
        case MirrorPosition.None:
            return 90;
    }
}

function getNextLaserPathPoint({
    currentPathPoint,
    mirrorPosition,
    rowDirection,
    columnDirection,
}: {
    currentPathPoint: LaserPathPoint;
    mirrorPosition: MirrorPosition;
    rowDirection: number;
    columnDirection: number;
}): LaserPathPoint {
    switch (mirrorPosition) {
        case MirrorPosition.Horizontal:
            return {
                column: currentPathPoint.column + columnDirection,
                row: currentPathPoint.row - rowDirection,
            };
        case MirrorPosition.Vertical:
            return {
                column: currentPathPoint.column - columnDirection,
                row: currentPathPoint.row + rowDirection,
            };
        case MirrorPosition.DiagonalToBottom:
            return {
                column: currentPathPoint.column + rowDirection,
                row: currentPathPoint.row + columnDirection,
            };
        case MirrorPosition.DiagonalToTop:
            return {
                column: currentPathPoint.column - rowDirection,
                row: currentPathPoint.row - columnDirection,
            };
        case MirrorPosition.None:
            return {
                column: currentPathPoint.column + columnDirection,
                row: currentPathPoint.row + rowDirection,
            };
    }
}

export const LaserComponent = ({ pageIndex }: { pageIndex: number }) => {
    const theme = useContext(ThemeContext);
    const [mirrors, setMirrors] = useState<Mirrors>(getMirrorsFromStorage());

    function changeMirrorPosition({ columnIndex, rowIndex }: { columnIndex: number; rowIndex: number }) {
        const mirror = mirrors[columnIndex][rowIndex];
        const newMirrorPositionIndex =
            mirror.positionIndex + 1 === mirror.positions.length ? 0 : mirror.positionIndex + 1;

        mirror.positionIndex = newMirrorPositionIndex;

        const newMirrors = mirrors.map((mirrorColumn, mapColumnIndex) =>
            columnIndex !== mapColumnIndex
                ? mirrorColumn
                : mirrorColumn.map((mirror, mapColumnRow) =>
                      rowIndex !== mapColumnRow ? mirror : { ...mirror, positionIndex: newMirrorPositionIndex }
                  )
        );

        setMirrors(newMirrors);
        setMirrorsToStorage(newMirrors);
    }

    function constructLaserPath({ origin, isFromLeftToRight }: { origin: LaserPathPoint; isFromLeftToRight: boolean }) {
        const laserPath = [origin];
        laserPath.push({ column: isFromLeftToRight ? origin.column + 1 : origin.column - 1, row: origin.row });

        let pathPointIndex = 1;
        let isLaserPathFinished = false;

        let rowDirection = 0;
        let columnDirection = isFromLeftToRight ? 1 : -1;
        while (!isLaserPathFinished && pathPointIndex <= 60) {
            const previousPathPoint = laserPath[pathPointIndex - 1];
            const currentPathPoint = laserPath[pathPointIndex];
            const currentMirror = mirrors[currentPathPoint.column][currentPathPoint.row];

            const nextLaserPathPoint = getNextLaserPathPoint({
                currentPathPoint,
                mirrorPosition: currentMirror.positions[currentMirror.positionIndex],
                columnDirection,
                rowDirection,
            });

            if (
                previousPathPoint.column === nextLaserPathPoint.column &&
                previousPathPoint.row === nextLaserPathPoint.row
            ) {
                isLaserPathFinished = true;
                continue;
            }

            laserPath.push(nextLaserPathPoint);

            if (
                nextLaserPathPoint.column >= 10 ||
                nextLaserPathPoint.column < 0 ||
                nextLaserPathPoint.row >= 5 ||
                nextLaserPathPoint.row < 0
            ) {
                isLaserPathFinished = true;
                continue;
            }

            rowDirection = nextLaserPathPoint.row - currentPathPoint.row;
            columnDirection = nextLaserPathPoint.column - currentPathPoint.column;

            pathPointIndex += 1;
        }

        return laserPath;
    }

    const leftMirrors = mirrors[pageIndex * 2];
    const rightMirrors = mirrors[pageIndex * 2 + 1];

    const greenLaserOrigin: LaserPathPoint = { column: 10, row: 2 };
    const greenLaserPath = constructLaserPath({ origin: greenLaserOrigin, isFromLeftToRight: false });

    const yellowLaserOrigin: LaserPathPoint = { column: -1, row: 1 };
    const blueLaserOrigin: LaserPathPoint = { column: -1, row: 3 };
    const yellowLaserPath = constructLaserPath({ origin: yellowLaserOrigin, isFromLeftToRight: true });
    const blueLaserPath = constructLaserPath({ origin: blueLaserOrigin, isFromLeftToRight: true });

    const isGreenBallActivated =
        greenLaserPath[greenLaserPath.length - 1].column === -1 && greenLaserPath[greenLaserPath.length - 1].row === 4;
    const isYellowBallActivated =
        yellowLaserPath[yellowLaserPath.length - 1].column === 10 &&
        yellowLaserPath[yellowLaserPath.length - 1].row === 1;
    const isBlueBallActivated =
        blueLaserPath[blueLaserPath.length - 1].column === 10 && blueLaserPath[blueLaserPath.length - 1].row === 0;

    return (
        <LaserContainer>
            {theme.name === ThemeName.Dark ? (
                <>
                    <LaserDisplay laserColor="#00ffaa" laserPath={greenLaserPath} pageIndex={pageIndex} />
                    {isGreenBallActivated ? (
                        <LaserDisplay laserColor="#f6ff00" laserPath={yellowLaserPath} pageIndex={pageIndex} />
                    ) : null}
                    {isGreenBallActivated ? (
                        <LaserDisplay laserColor="#008cff" laserPath={blueLaserPath} pageIndex={pageIndex} />
                    ) : null}
                </>
            ) : null}
            <MirrorsContainer isLeft={true}>
                {leftMirrors.map(({ positionIndex, positions }, rowIndex) => (
                    <MirrorContainer
                        key={rowIndex}
                        onClick={() => changeMirrorPosition({ columnIndex: pageIndex * 2, rowIndex })}
                        rotation={getRotationForPosition(positions[positionIndex])}
                    >
                        {positions[positionIndex] === MirrorPosition.None ? <NoMirrorComponent /> : <MirrorComponent />}
                    </MirrorContainer>
                ))}
            </MirrorsContainer>
            <MirrorsContainer isLeft={false}>
                {rightMirrors.map(({ positionIndex, positions }, rowIndex) => (
                    <MirrorContainer
                        key={rowIndex}
                        onClick={() => changeMirrorPosition({ columnIndex: pageIndex * 2 + 1, rowIndex })}
                        rotation={getRotationForPosition(positions[positionIndex])}
                    >
                        {positions[positionIndex] === MirrorPosition.None ? <NoMirrorComponent /> : <MirrorComponent />}
                    </MirrorContainer>
                ))}
            </MirrorsContainer>
            {pageIndex === 0 ? (
                <LaserBall
                    style={{ left: 2, top: '83.3%' }}
                    color={'#00ffaa'}
                    isActivated={isGreenBallActivated}
                ></LaserBall>
            ) : null}

            {pageIndex === 4 ? (
                <LaserBall
                    style={{ right: 2, top: '31.3%' }}
                    color={'#f6ff00'}
                    isActivated={isYellowBallActivated}
                ></LaserBall>
            ) : null}

            {pageIndex === 4 ? (
                <LaserBall
                    style={{ right: 2, top: '13.8%' }}
                    color={'#008cff'}
                    isActivated={isBlueBallActivated}
                ></LaserBall>
            ) : null}
        </LaserContainer>
    );
};

const LaserContainer = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 1;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    pointer-events: none;
`;

const MirrorsContainer = styled.div<{ isLeft: boolean }>`
    height: 100%;
    width: 10%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    pointer-events: all;
    box-shadow: ${({ isLeft }) => (isLeft ? 'inset -5px 0 9px -7px black' : 'inset 5px 0 9px -7px black')};
    background-color: ${({ theme }) => theme.color.background};
`;

const MirrorContainer = styled.div<{ rotation: number }>`
    cursor: pointer;
    width: 40px;
    height: 40px;
    transform: rotateZ(${({ rotation }) => rotation}deg);
    display: flex;
    align-items: center;
    justify-content: center;
`;

const MirrorComponent = styled.div`
    width: 4px;
    height: 50px;
    background-color: ${({ theme }) => theme.color.text};
`;

const NoMirrorComponent = styled.div`
    width: 8px;
    height: 30px;
    border-color: ${({ theme }) => theme.color.text};
    border-top-width: 0;
    border-bottom-width: 0;
    border-left-width: 2px;
    border-right-width: 2px;
    border-style: dotted;
`;

const LaserBall = styled.div`
    position: absolute;
    border-radius: 50%;
    width: 30px;
    height: 30px;
    animation: 1.5s infinite alternate
        ${({ color, isActivated }: { color: string; isActivated: boolean }) =>
            isActivated ? pulsateActivated(color) : pulsate(color)};
    background-color: ${({ theme }) => theme.color.background};
`;

const pulsate = (color: string) => keyframes`
    100% {
        /* Larger blur radius */
        box-shadow: 0 0 2px white, 0 0 5px white, 0 0 10px white;
    }
    0% {
        /* Smaller blur radius */
        box-shadow: 0 0 1px white, 0 0 2px white, 0 0 3px white;
    }
`;

const pulsateActivated = (color: string) => keyframes`
    100% {
        /* Larger blur radius */
        box-shadow: 0 0 2px white, 0 0 5px white, 0 0 10px white, 0 0 20px ${color}, 0 0 40px ${color}, 0 0 45px ${color},
            0 0 50px ${color}, 0 0 75px ${color} , inset 0 0 2px ${color}, inset 0 0 5px ${color}, inset 0 0 10px ${color}, inset 0 0 20px ${color}, inset 0 0 40px ${color}, inset 0 0 45px ${color}, inset
            0 0 50px ${color}, inset 0 0 75px ${color};
    }
    0% {
        /* Smaller blur radius */
        box-shadow: 0 0 1px white, 0 0 2px white, 0 0 3px white, 0 0 5px ${color}, 0 0 22px ${color}, 0 0 27px ${color},
            0 0 35px ${color}, 0 0 40px ${color}, inset 0 0 1px ${color}, inset 0 0 2px ${color}, inset 0 0 3px ${color}, inset 0 0 5px ${color}, inset 0 0 22px ${color}, inset 0 0 27px ${color}, inset
            0 0 35px ${color}, inset 0 0 40px ${color};
    }
`;
