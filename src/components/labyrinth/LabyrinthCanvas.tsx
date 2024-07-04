import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { mapsInfo } from './constants';
import { MapObject } from './gameObjects/Map';
import { Player } from './gameObjects/Player';
import playerSheet from './assets/pokemonWalkingSprite.png';
import { Inputs } from './gameObjects/Inputs';
import { Block } from './gameObjects/Block';
import { NextPosition } from 'pages/Labyrinth';
import { tpInfos } from './tpInfo';
import { TP } from './gameObjects/TP';
import { Text } from './gameObjects/Text';

export const LabyrinthCanvas = ({
    mapIndex,
    inputs,
    nextPosition,
    setNextPosition,
}: {
    mapIndex: number;
    inputs: Inputs;
    nextPosition: NextPosition;
    setNextPosition: React.Dispatch<React.SetStateAction<NextPosition>>;
}) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const playerRef = useRef<Player>();
    const animationRef = useRef<number>();

    const [isHighlighted, setIsHighlighted] = useState<boolean>(false);

    const mapInfo = mapsInfo[mapIndex];

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) {
            return;
        }

        const maxWidth = window.innerWidth * mapInfo.maxWindowRatioWidth;
        const maxHeight = window.innerHeight * mapInfo.maxWindowRatioHeight;

        const maxHeightAssociatedWidth = (maxHeight * mapInfo.tilesWidth) / mapInfo.tilesHeight;
        const maxWidthAssociatedHeight = (maxWidth * mapInfo.tilesHeight) / mapInfo.tilesWidth;

        const canvasWidth =
            Math.floor(Math.min(maxWidth, maxHeightAssociatedWidth) / mapInfo.tilesWidth) * mapInfo.tilesWidth;

        const canvasHeight =
            Math.floor(Math.min(maxHeight, maxWidthAssociatedHeight) / mapInfo.tilesHeight) * mapInfo.tilesHeight;

        canvas.width = canvasWidth;
        canvas.height = canvasHeight;

        const context = canvas.getContext('2d');

        if (!context) {
            return;
        }

        const map = new MapObject({
            context,
            height: canvas.height,
            imageUrl: mapInfo.map,
            floorImagesUrl: mapInfo.floorImagesUrl,
            width: canvas.width,
        });
        const blocks = mapInfo.blocks.map((blockArray) =>
            blockArray.map(
                (blockInfo) =>
                    new Block({
                        context,
                        gridX: blockInfo[0],
                        gridY: blockInfo[1],
                        tileHeight: canvasHeight / mapInfo.tilesHeight,
                        tileWidth: canvasWidth / mapInfo.tilesWidth,
                    })
            )
        );

        const tps = tpInfos.map(
            (tpInfo) =>
                new TP({
                    color: tpInfo.color,
                    context,
                    gridX: tpInfo.position.gridX,
                    gridY: tpInfo.position.gridY,
                    mapIndex: tpInfo.position.mapIndex,
                    tileHeight: canvasHeight / mapInfo.tilesHeight,
                    tileWidth: canvasWidth / mapInfo.tilesWidth,
                    type: tpInfo.type,
                })
        );
        const player = new Player({
            context,
            gridX: 0,
            gridY: 0,
            floor: 0,
            mapIndex,
            sheetUrl: playerSheet,
            tileHeight: canvasHeight / mapInfo.tilesHeight,
            tileWidth: canvasWidth / mapInfo.tilesWidth,
        });
        const text = new Text({
            canvasHeight,
            canvasWidth,
            tileHeight: canvasHeight / mapInfo.tilesHeight,
            tileWidth: canvasWidth / mapInfo.tilesWidth,
            context,
            mapIndex,
        });

        playerRef.current = player;

        const animate = ({ canvas, context }: { canvas: HTMLCanvasElement; context: CanvasRenderingContext2D }) => {
            context.clearRect(0, 0, canvas.width, canvas.height);
            map.draw();
            if (player.mapIndex === mapIndex) {
                player.draw();
                player.update({ inputs, blocks: blocks[player.floor], setNextPosition });
                // blocks[player.floor].forEach((block) => block.draw());
            }
            map.drawFloor(player.floor);
            tps.filter((tp) => tp.mapIndex === mapIndex).forEach((tp) => tp.draw());
            text.draw(player, inputs);
            animationRef.current = requestAnimationFrame(() => animate({ canvas, context }));
        };

        animate({ canvas, context });

        // 👇️ remove the event listener when component unmounts
        return () => {
            if (animationRef.current) {
                cancelAnimationFrame(animationRef.current);
            }
        };
    }, [canvasRef.current]);

    useEffect(() => {
        const player = playerRef.current;
        if (player) {
            player.gridX = nextPosition.gridX;
            player.gridY = nextPosition.gridY;
            player.floor = nextPosition.floor;
            player.mapIndex = nextPosition.mapIndex;

            setIsHighlighted(nextPosition.mapIndex === mapIndex);
        }
    }, [playerRef.current, nextPosition]);

    return <Canvas ref={canvasRef} isHighlighted={isHighlighted} />;
};

const Canvas = styled.canvas<{ isHighlighted: boolean }>`
    display: block;
    border: 2px solid ${({ isHighlighted, theme }) => (isHighlighted ? theme.mailing.color.highlight : 'transparent')};
    margin: auto;
`;
