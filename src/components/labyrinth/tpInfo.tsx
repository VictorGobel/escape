import { NextPosition } from 'pages/Labyrinth';
import { TPType } from './gameObjects/TP';

type tp = { color: string; position: NextPosition; nextPosition: NextPosition; type: TPType };

export const tpInfos: tp[] = [
    {
        color: '#ff0000',
        position: { floor: 1, gridX: 22, gridY: 17, mapIndex: 1 },
        nextPosition: { floor: 0, gridX: 4, gridY: 5, mapIndex: 0 },
        type: TPType.QuadArc,
    },
    {
        color: '#ff0000',
        position: { floor: 0, gridX: 5, gridY: 5, mapIndex: 0 },
        nextPosition: { floor: 1, gridX: 22, gridY: 18, mapIndex: 1 },
        type: TPType.QuadArc,
    },

    {
        color: '#0000ff',
        position: { floor: 1, gridX: 8, gridY: 18, mapIndex: 1 },
        nextPosition: { floor: 0, gridX: 1, gridY: 9, mapIndex: 2 },
        type: TPType.DoubleArc,
    },
    {
        color: '#0000ff',
        position: { floor: 0, gridX: 1, gridY: 10, mapIndex: 2 },
        nextPosition: { floor: 1, gridX: 8, gridY: 17, mapIndex: 1 },
        type: TPType.DoubleArc,
    },

    {
        color: '#00ff00',
        position: { floor: 0, gridX: 3, gridY: 1, mapIndex: 2 },
        nextPosition: { floor: 0, gridX: 6, gridY: 9, mapIndex: 1 },
        type: TPType.Arc,
    },
    {
        color: '#00ff00',
        position: { floor: 0, gridX: 6, gridY: 10, mapIndex: 1 },
        nextPosition: { floor: 0, gridX: 4, gridY: 1, mapIndex: 2 },
        type: TPType.Arc,
    },

    {
        color: '#ff00ff',
        position: { floor: 0, gridX: 2, gridY: 3, mapIndex: 1 },
        nextPosition: { floor: 1, gridX: 28, gridY: 11, mapIndex: 1 },
        type: TPType.DoubleArc,
    },
    {
        color: '#ff00ff',
        position: { floor: 1, gridX: 28, gridY: 10, mapIndex: 1 },
        nextPosition: { floor: 0, gridX: 2, gridY: 4, mapIndex: 1 },
        type: TPType.DoubleArc,
    },

    {
        color: '#ffff00',
        position: { floor: 0, gridX: 4, gridY: 20, mapIndex: 1 },
        nextPosition: { floor: 0, gridX: 13, gridY: 10, mapIndex: 2 },
        type: TPType.Arc,
    },
    {
        color: '#ffff00',
        position: { floor: 0, gridX: 14, gridY: 10, mapIndex: 2 },
        nextPosition: { floor: 0, gridX: 3, gridY: 20, mapIndex: 1 },
        type: TPType.Arc,
    },

    {
        color: '#00ffff',
        position: { floor: 0, gridX: 10, gridY: 10, mapIndex: 2 },
        nextPosition: { floor: 0, gridX: 11, gridY: 7, mapIndex: 0 },
        type: TPType.QuadArc,
    },
    {
        color: '#00ffff',
        position: { floor: 0, gridX: 10, gridY: 7, mapIndex: 0 },
        nextPosition: { floor: 0, gridX: 11, gridY: 10, mapIndex: 2 },
        type: TPType.QuadArc,
    },

    {
        color: '#000000',
        position: { floor: 0, gridX: 11, gridY: 7, mapIndex: 2 },
        nextPosition: { floor: 0, gridX: 19, gridY: 21, mapIndex: 1 },
        type: TPType.Arc,
    },
    {
        color: '#000000',
        position: { floor: 0, gridX: 18, gridY: 21, mapIndex: 1 },
        nextPosition: { floor: 0, gridX: 11, gridY: 8, mapIndex: 2 },
        type: TPType.Arc,
    },

    {
        color: '#00ff00',
        position: { floor: 0, gridX: 24, gridY: 13, mapIndex: 1 },
        nextPosition: { floor: 0, gridX: 9, gridY: 5, mapIndex: 2 },
        type: TPType.QuadArc,
    },
    {
        color: '#00ff00',
        position: { floor: 0, gridX: 8, gridY: 5, mapIndex: 2 },
        nextPosition: { floor: 0, gridX: 25, gridY: 13, mapIndex: 1 },
        type: TPType.QuadArc,
    },

    {
        color: '#ffff00',
        position: { floor: 0, gridX: 14, gridY: 1, mapIndex: 2 },
        nextPosition: { floor: 0, gridX: 4, gridY: 10, mapIndex: 2 },
        type: TPType.DoubleArc,
    },
    {
        color: '#ffff00',
        position: { floor: 0, gridX: 3, gridY: 10, mapIndex: 2 },
        nextPosition: { floor: 0, gridX: 13, gridY: 1, mapIndex: 2 },
        type: TPType.DoubleArc,
    },

    {
        color: '#0000ff',
        position: { floor: 0, gridX: 4, gridY: 7, mapIndex: 2 },
        nextPosition: { floor: 0, gridX: 14, gridY: 4, mapIndex: 2 },
        type: TPType.Arc,
    },
    {
        color: '#0000ff',
        position: { floor: 0, gridX: 14, gridY: 3, mapIndex: 2 },
        nextPosition: { floor: 0, gridX: 4, gridY: 8, mapIndex: 2 },
        type: TPType.Arc,
    },

    {
        color: '#00ffff',
        position: { floor: 0, gridX: 12, gridY: 6, mapIndex: 2 },
        nextPosition: { floor: 0, gridX: 14, gridY: 2, mapIndex: 1 },
        type: TPType.DoubleArc,
    },
    {
        color: '#00ffff',
        position: { floor: 0, gridX: 13, gridY: 2, mapIndex: 1 },
        nextPosition: { floor: 0, gridX: 13, gridY: 6, mapIndex: 2 },
        type: TPType.DoubleArc,
    },

    {
        color: '#00ff00',
        position: { floor: 0, gridX: 13, gridY: 9, mapIndex: 1 },
        nextPosition: { floor: 0, gridX: 6, gridY: 3, mapIndex: 0 },
        type: TPType.DoubleArc,
    },
    {
        color: '#00ff00',
        position: { floor: 0, gridX: 6, gridY: 4, mapIndex: 0 },
        nextPosition: { floor: 0, gridX: 13, gridY: 10, mapIndex: 1 },
        type: TPType.DoubleArc,
    },

    {
        color: '#000000',
        position: { floor: 0, gridX: 14, gridY: 8, mapIndex: 2 },
        nextPosition: { floor: 0, gridX: 1, gridY: 2, mapIndex: 2 },
        type: TPType.QuadArc,
    },
    {
        color: '#000000',
        position: { floor: 0, gridX: 1, gridY: 1, mapIndex: 2 },
        nextPosition: { floor: 0, gridX: 14, gridY: 7, mapIndex: 2 },
        type: TPType.QuadArc,
    },

    {
        color: '#ff00ff',
        position: { floor: 0, gridX: 1, gridY: 4, mapIndex: 2 },
        nextPosition: { floor: 0, gridX: 6, gridY: 6, mapIndex: 2 },
        type: TPType.QuadArc,
    },
    {
        color: '#ff00ff',
        position: { floor: 0, gridX: 5, gridY: 6, mapIndex: 2 },
        nextPosition: { floor: 0, gridX: 1, gridY: 3, mapIndex: 2 },
        type: TPType.QuadArc,
    },

    {
        color: '#ffff00',
        position: { floor: 0, gridX: 6, gridY: 10, mapIndex: 2 },
        nextPosition: { floor: 0, gridX: 6, gridY: 8, mapIndex: 0 },
        type: TPType.QuadArc,
    },
    {
        color: '#ffff00',
        position: { floor: 0, gridX: 7, gridY: 8, mapIndex: 0 },
        nextPosition: { floor: 0, gridX: 7, gridY: 10, mapIndex: 2 },
        type: TPType.QuadArc,
    },

    {
        color: '#000000',
        position: { floor: 0, gridX: 21, gridY: 10, mapIndex: 1 },
        nextPosition: { floor: 1, gridX: 21, gridY: 4, mapIndex: 1 },
        type: TPType.DoubleArc,
    },
    {
        color: '#000000',
        position: { floor: 1, gridX: 22, gridY: 4, mapIndex: 1 },
        nextPosition: { floor: 0, gridX: 22, gridY: 10, mapIndex: 1 },
        type: TPType.DoubleArc,
    },

    {
        color: '#00ffff',
        position: { floor: 1, gridX: 8, gridY: 5, mapIndex: 1 },
        nextPosition: { floor: 0, gridX: 7, gridY: 1, mapIndex: 2 },
        type: TPType.Arc,
    },
    {
        color: '#00ffff',
        position: { floor: 0, gridX: 6, gridY: 1, mapIndex: 2 },
        nextPosition: { floor: 1, gridX: 9, gridY: 5, mapIndex: 1 },
        type: TPType.Arc,
    },

    {
        color: '#ff0000',
        position: { floor: 0, gridX: 9, gridY: 1, mapIndex: 2 },
        nextPosition: { floor: 1, gridX: 22, gridY: 14, mapIndex: 1 },
        type: TPType.Arc,
    },
    {
        color: '#ff0000',
        position: { floor: 1, gridX: 22, gridY: 13, mapIndex: 1 },
        nextPosition: { floor: 0, gridX: 8, gridY: 1, mapIndex: 2 },
        type: TPType.Arc,
    },

    {
        color: '#ff00ff',
        position: { floor: 1, gridX: 22, gridY: 15, mapIndex: 1 },
        nextPosition: { floor: 0, gridX: 30, gridY: 3, mapIndex: 1 },
        type: TPType.Arc,
    },
    {
        color: '#ff00ff',
        position: { floor: 0, gridX: 30, gridY: 2, mapIndex: 1 },
        nextPosition: { floor: 1, gridX: 22, gridY: 14, mapIndex: 1 },
        type: TPType.Arc,
    },

    {
        color: '#ff0000',
        position: { floor: 1, gridX: 2, gridY: 9, mapIndex: 1 },
        nextPosition: { floor: 1, gridX: 27, gridY: 16, mapIndex: 1 },
        type: TPType.DoubleArc,
    },
    {
        color: '#ff0000',
        position: { floor: 1, gridX: 27, gridY: 15, mapIndex: 1 },
        nextPosition: { floor: 1, gridX: 2, gridY: 10, mapIndex: 1 },
        type: TPType.DoubleArc,
    },
];
