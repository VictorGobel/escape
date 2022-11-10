import mapBig from './assets/mapBig.png';
import mapBigFloor0 from './assets/mapBigFloor0.png';
import mapBigFloor1 from './assets/mapBigFloor1.png';
import autelMap from './assets/autelMap.png';
import autelMapFloor0 from './assets/autelMapFloor0.png';
import maxTPMap from './assets/maxTPMap.png';
import maxTPMapFloor0 from './assets/maxTPMapFloor0.png';
import {
    autelMapBlocks,
    bigMapBlocksFloor0,
    bigMapBlocksFloor1,
    bigMapBlocksFloor2,
    maxTPMapBlocks,
} from './blockInfo';

export const mapsInfo = [
    {
        map: autelMap,
        floorImagesUrl: [autelMapFloor0],
        maxWindowRatioWidth: 0.29,
        maxWindowRatioHeight: 0.8,
        tilesWidth: 16,
        tilesHeight: 12,
        blocks: [autelMapBlocks],
    },
    {
        map: mapBig,
        floorImagesUrl: [mapBigFloor0, mapBigFloor0, mapBigFloor1],
        maxWindowRatioWidth: 0.6,
        maxWindowRatioHeight: 0.8,
        tilesWidth: 32,
        tilesHeight: 24,
        blocks: [bigMapBlocksFloor0, bigMapBlocksFloor1, bigMapBlocksFloor2],
    },
    {
        map: maxTPMap,
        floorImagesUrl: [maxTPMapFloor0],
        maxWindowRatioWidth: 0.4,
        maxWindowRatioHeight: 0.8,
        tilesWidth: 16,
        tilesHeight: 12,
        blocks: [maxTPMapBlocks],
    },
];

export enum Direction {
    Up = 'Up',
    Down = 'Down',
    Left = 'Left',
    Right = 'Right',
}

export enum KeybordKey {
    Z = 'z',
    Q = 'q',
    S = 's',
    D = 'd',
    Up = 'arrowup',
    Down = 'arrowdown',
    Left = 'arrowleft',
    Right = 'arrowright',
}

export const KeyboardKeyToDirection: Record<KeybordKey, Direction> = {
    [KeybordKey.D]: Direction.Right,
    [KeybordKey.Down]: Direction.Down,
    [KeybordKey.Left]: Direction.Left,
    [KeybordKey.Q]: Direction.Left,
    [KeybordKey.Right]: Direction.Right,
    [KeybordKey.S]: Direction.Down,
    [KeybordKey.Up]: Direction.Up,
    [KeybordKey.Z]: Direction.Up,
};
