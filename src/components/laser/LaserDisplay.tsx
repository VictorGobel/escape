import styled, { keyframes } from 'styled-components';

type LaserPathPoint = { column: number; row: number };

export const LaserDisplay = ({
    laserColor,
    laserPath,
    pageIndex,
}: {
    laserColor: string;
    laserPath: LaserPathPoint[];
    pageIndex: number;
}) => {
    return (
        <>
            {laserPath.flatMap(({ column, row }, laserPathIndex) => {
                const lasers = [];
                const previous = laserPath[laserPathIndex - 1];
                const next = laserPath[laserPathIndex + 1];
                if (column === pageIndex * 2) {
                    if (previous && previous.column > column) {
                        lasers.push(
                            <Laser
                                key={`${column}-${row}-1`}
                                color={laserColor}
                                top={`${(row + 1) * 17.35 - 2.15}%`}
                                left="5%"
                                height="2px"
                                width="5%"
                            />
                        );
                    }
                    if (previous && previous.column < column) {
                        lasers.push(
                            <Laser
                                key={`${column}-${row}-2`}
                                color={laserColor}
                                top={`${(row + 1) * 17.35 - 2.15}%`}
                                left="0"
                                height="2px"
                                width="5%"
                            />
                        );
                    }

                    if (next && next.column > column) {
                        lasers.push(
                            <Laser
                                key={`${column}-${row}-3`}
                                color={laserColor}
                                top={`${(row + 1) * 17.35 - 2.15}%`}
                                left="5%"
                                height="2px"
                                width="5%"
                            />
                        );
                    }
                    if (next && next.column < column) {
                        lasers.push(
                            <Laser
                                key={`${column}-${row}-4`}
                                color={laserColor}
                                top={`${(row + 1) * 17.35 - 2.15}%`}
                                left="0"
                                height="2px"
                                width="5%"
                            />
                        );
                    }
                    if (next && next.column === column) {
                        lasers.push(
                            <Laser
                                key={`${column}-${row}-5`}
                                color={laserColor}
                                top={`${(Math.min(next.row, row) + 1) * 17.35 - 2.15}%`}
                                left="4.95%"
                                height="17.35%"
                                width="2px"
                            />
                        );
                    }
                }

                if (column === pageIndex * 2 + 1) {
                    if (previous && previous.column > column) {
                        lasers.push(
                            <Laser
                                key={`${column}-${row}-6`}
                                color={laserColor}
                                top={`${(row + 1) * 17.35 - 2.15}%`}
                                left="95%"
                                height="2px"
                                width="5%"
                            />
                        );
                    }
                    if (previous && previous.column < column) {
                        lasers.push(
                            <Laser
                                key={`${column}-${row}-7`}
                                color={laserColor}
                                top={`${(row + 1) * 17.35 - 2.15}%`}
                                left="90%"
                                height="2px"
                                width="5%"
                            />
                        );
                    }

                    if (next && next.column > column) {
                        lasers.push(
                            <Laser
                                key={`${column}-${row}-8`}
                                color={laserColor}
                                top={`${(row + 1) * 17.35 - 2.15}%`}
                                left="95%"
                                height="2px"
                                width="5%"
                            />
                        );
                    }
                    if (next && next.column < column) {
                        lasers.push(
                            <Laser
                                key={`${column}-${row}-9`}
                                color={laserColor}
                                top={`${(row + 1) * 17.35 - 2.15}%`}
                                left="90%"
                                height="2px"
                                width="5%"
                            />
                        );
                    }

                    if (next && next.column === column) {
                        lasers.push(
                            <Laser
                                key={`${column}-${row}-10`}
                                color={laserColor}
                                top={`${(Math.min(next.row, row) + 1) * 17.35 - 2.15}%`}
                                left="94.95%"
                                height="17.35%"
                                width="2px"
                            />
                        );
                    }
                }

                return lasers;
            })}
        </>
    );
};

const Laser = styled.div`
    position: absolute;
    top: ${({ top }: { top: string; width: string; left: string; height: string; color: string }) => top};
    left: ${({ left }: { left: string }) => left};
    width: ${({ width }: { width: string }) => width};
    height: ${({ height }: { height: string }) => height};
    background-color: ${({ color }: { color: string }) => color};
    animation: 1.5s infinite alternate ${({ color }: { color: string }) => pulsate(color)};
`;

const pulsate = (color: string) => keyframes`
    100% {
        /* Larger blur radius */
        box-shadow: 0 0 2px white, 0 0 5px white, 0 0 10px white, 0 0 20px ${color}, 0 0 40px ${color}, 0 0 45px ${color},
            0 0 50px ${color}, 0 0 75px ${color};
    }
    0% {
        /* Smaller blur radius */
        box-shadow: 0 0 1px white, 0 0 2px white, 0 0 3px white, 0 0 5px ${color}, 0 0 22px ${color}, 0 0 27px ${color},
            0 0 35px ${color}, 0 0 40px ${color};
    }
`;
