export const autelMapBlocks: number[][] = [
    [5, 1],

    [1, 2],
    [3, 2],
    [5, 2],
    [6, 2],
    [9, 2],
    [12, 2],
    [14, 2],

    [2, 3],
    [5, 3],
    [10, 3],
    [13, 3],

    [1, 4],
    [3, 4],
    [5, 4],
    [12, 4],
    [14, 4],

    [6, 5],
    [9, 5],

    [9, 7],

    [1, 8],
    [3, 8],
    [5, 8],
    [9, 8],
    [10, 8],
    [12, 8],
    [14, 8],

    [2, 9],
    [9, 9],
    [10, 9],
    [13, 9],

    [1, 10],
    [3, 10],
    [6, 10],
    [8, 10],
    [9, 10],
    [12, 10],
    [14, 10],

    [8, 11],
    [9, 11],
    [10, 11],
];
for (let i = 0; i < 16; i++) {
    autelMapBlocks.push([i, 0]);
    autelMapBlocks.push([i, 6]);
    autelMapBlocks.push([i, 12]);
}
for (let j = 0; j < 12; j++) {
    autelMapBlocks.push([-1, j]);
    autelMapBlocks.push([16, j]);
}

export const maxTPMapBlocks: number[][] = [
    [2, 1],
    [5, 1],
    [10, 1],

    [2, 2],
    [3, 2],
    [5, 2],
    [6, 2],
    [9, 2],
    [10, 2],
    [12, 2],
    [13, 2],
    [14, 2],

    [2, 3],
    [3, 3],
    [5, 3],
    [6, 3],
    [7, 3],
    [8, 3],
    [9, 3],
    [10, 3],
    [12, 3],
    [13, 3],

    [2, 4],
    [3, 4],
    [5, 4],
    [6, 4],
    [7, 4],
    [8, 4],
    [9, 4],
    [10, 4],
    [12, 4],
    [13, 4],

    [1, 5],
    [5, 5],
    [7, 5],
    [12, 5],

    [3, 6],
    [4, 6],
    [8, 6],
    [11, 6],

    [2, 7],
    [3, 7],
    [5, 7],
    [6, 7],
    [8, 7],
    [9, 7],
    [10, 7],
    [12, 7],
    [13, 7],

    [2, 8],
    [3, 8],
    [5, 8],
    [6, 8],
    [9, 8],
    [10, 8],
    [12, 8],
    [13, 8],

    [2, 9],
    [3, 9],
    [5, 9],
    [6, 9],
    [9, 9],
    [10, 9],
    [12, 9],
    [13, 9],
    [14, 9],

    [2, 10],
    [5, 10],
    [9, 10],
];
for (let i = 0; i < 16; i++) {
    maxTPMapBlocks.push([i, 0]);
    maxTPMapBlocks.push([i, 11]);
}
for (let j = 1; j < 11; j++) {
    maxTPMapBlocks.push([0, j]);
    maxTPMapBlocks.push([15, j]);
}

export const bigMapBlocksFloor0: number[][] = [
    [9, 2],
    [12, 2],

    [5, 3],

    [7, 4],
    [23, 4],

    [6, 5],
    [23, 5],

    [1, 6],
    [7, 6],
    [23, 6],

    [2, 7],
    [3, 7],

    [7, 8],
    [18, 8],

    [8, 9],
    [9, 9],
    [11, 9],
    [15, 9],
    [19, 9],
    [22, 9],
    [30, 9],

    [7, 10],

    [31, 11],

    [24, 12],
    [25, 12],

    [5, 13],
    [6, 13],
    [30, 13],

    [6, 14],

    [2, 18],
    [3, 18],
    [27, 18],
    [28, 18],

    [24, 19],
    [27, 19],

    [13, 21],
    [17, 21],

    [14, 23],
    [16, 23],

    [15, 24],
];

for (let i = 7; i <= 23; i++) {
    bigMapBlocksFloor0.push([i, 3]);
    bigMapBlocksFloor0.push([i, 7]);
    bigMapBlocksFloor0.push([i, 11]);
    bigMapBlocksFloor0.push([i, 20]);
}

for (let j = 12; j <= 19; j++) {
    bigMapBlocksFloor0.push([7, j]);
    bigMapBlocksFloor0.push([23, j]);
}

for (let j = 2; j <= 6; j++) {
    bigMapBlocksFloor0.push([27, j]);
    bigMapBlocksFloor0.push([28, j]);
}

for (let j = 7; j <= 18; j++) {
    bigMapBlocksFloor0.push([1, j]);
    bigMapBlocksFloor0.push([4, j]);
    bigMapBlocksFloor0.push([26, j]);
    bigMapBlocksFloor0.push([29, j]);
}

for (let i = 0; i < 32; i++) {
    bigMapBlocksFloor0.push([i, 1]);
    if (i !== 15) {
        bigMapBlocksFloor0.push([i, 22]);
    }
}
for (let j = 2; j < 23; j++) {
    bigMapBlocksFloor0.push([-1, j]);
    bigMapBlocksFloor0.push([32, j]);
}

export const bigMapBlocksFloor1: number[][] = [
    [7, 3],
    [11, 3],
    [12, 3],
    [14, 3],
    [15, 3],
    [16, 3],
    [18, 3],
    [19, 3],
    [23, 3],
    [7, 4],
    [23, 4],
    [6, 5],
    [24, 5],

    [27, 8],
    [29, 9],

    [1, 6],
    [2, 6],
    [3, 6],
    [4, 6],
    [26, 6],
    [27, 6],
    [28, 6],
    [29, 6],

    [3, 7],

    [22, 12],

    [27, 13],
    [28, 13],

    [1, 14],
    [4, 14],
    [26, 14],
    [27, 14],
    [28, 14],
    [29, 14],

    [2, 16],
    [3, 16],

    [22, 16],

    [1, 17],
    [2, 17],
    [3, 17],
    [4, 17],
    [26, 17],
    [27, 17],
    [28, 17],
    [29, 17],

    [13, 18],

    [14, 20],
    [16, 20],
    [14, 21],
    [16, 21],
    [14, 22],
    [16, 22],
    [14, 23],
    [16, 23],
    [15, 24],
];

for (let j = 13; j <= 16; j++) {
    bigMapBlocksFloor1.push([9, j]);
    bigMapBlocksFloor1.push([14, j]);
    bigMapBlocksFloor1.push([16, j]);
    bigMapBlocksFloor1.push([21, j]);
}

for (let j = 7; j <= 16; j++) {
    bigMapBlocksFloor1.push([0, j]);
    bigMapBlocksFloor1.push([5, j]);
    bigMapBlocksFloor1.push([25, j]);
    bigMapBlocksFloor1.push([30, j]);
}

for (let j = 11; j <= 18; j++) {
    bigMapBlocksFloor1.push([7, j]);
    bigMapBlocksFloor1.push([23, j]);
}

for (let i = 7; i <= 23; i++) {
    bigMapBlocksFloor1.push([i, 2]);
    bigMapBlocksFloor1.push([i, 6]);
    bigMapBlocksFloor1.push([i, 10]);
    if (i !== 15) {
        bigMapBlocksFloor1.push([i, 19]);
    }
}

for (let i = 9; i <= 21; i++) {
    if (i !== 15) {
        bigMapBlocksFloor1.push([i, 12]);
        bigMapBlocksFloor1.push([i, 17]);
    }
}

export const bigMapBlocksFloor2: number[][] = [
    [13, 12],
    [17, 12],

    [12, 13],
    [18, 13],

    [12, 14],
    [18, 14],

    [13, 15],
    [17, 15],
];

for (let i = 13; i <= 17; i++) {
    bigMapBlocksFloor2.push([i, 11]);
    bigMapBlocksFloor2.push([i, 16]);
}
