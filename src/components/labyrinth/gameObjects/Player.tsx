import { NextPosition } from 'pages/Labyrinth';
import { Direction } from '../constants';
import { tpInfos } from '../tpInfo';
import { Block } from './Block';
import { Inputs } from './Inputs';

export class Player {
    public gridX: number;
    public gridY: number;
    public floor: number;
    public mapIndex: number;

    public tileWidth: number;
    public tileHeight: number;
    public sheetUrl: string;
    public sheetTileWidth: number = 108;
    public sheet: HTMLImageElement;
    public isLoaded: boolean = false;
    public context: CanvasRenderingContext2D;

    public animationFrameRemaining: number = 0;
    public animationStep: number = 0;
    public animationDirection: Direction = Direction.Up;

    constructor({
        context,
        gridX,
        gridY,
        floor,
        mapIndex,
        tileWidth,
        tileHeight,
        sheetUrl,
    }: {
        context: CanvasRenderingContext2D;
        gridX: number;
        gridY: number;
        floor: number;
        mapIndex: number;
        tileWidth: number;
        tileHeight: number;
        sheetUrl: string;
    }) {
        this.context = context;
        this.gridX = gridX;
        this.gridY = gridY;
        this.floor = floor;
        this.mapIndex = mapIndex;
        this.tileWidth = tileWidth;
        this.tileHeight = tileHeight;
        this.sheetUrl = sheetUrl;

        const sheet = new Image();
        sheet.src = this.sheetUrl;
        sheet.onload = () => {
            this.isLoaded = true;
        };
        this.sheet = sheet;
    }

    draw() {
        let sheetY = 0;
        let deltaX = 0;
        let deltaY = 0;
        switch (this.animationDirection) {
            case Direction.Down:
                sheetY = 0;
                deltaX = 0;
                deltaY = -this.animationFrameRemaining;
                break;
            case Direction.Up:
                sheetY = 3;
                deltaX = 0;
                deltaY = this.animationFrameRemaining;
                break;
            case Direction.Right:
                sheetY = 2;
                deltaX = -this.animationFrameRemaining;
                deltaY = 0;
                break;
            case Direction.Left:
                sheetY = 1;
                deltaX = this.animationFrameRemaining;
                deltaY = 0;
                break;
        }
        if (this.animationFrameRemaining) {
            this.animationStep = (this.animationStep + 0.25) % 4;
        } else {
            this.animationStep = 0;
        }

        if (this.isLoaded) {
            this.context.drawImage(
                this.sheet,
                0 + Math.floor(this.animationStep) * 108,
                90 + sheetY * 108,
                108,
                96,
                this.gridX * this.tileWidth + Math.floor(0.045 * this.tileWidth) + deltaX,
                this.gridY * this.tileHeight - Math.floor(0.3 * this.tileHeight) + deltaY,
                this.tileWidth,
                this.tileHeight
            );
        }
    }

    update({
        inputs,
        blocks,
        setNextPosition,
    }: {
        inputs: Inputs;
        blocks: Block[];
        setNextPosition: React.Dispatch<React.SetStateAction<NextPosition>>;
    }) {
        const direction = inputs.getCurrentDirection();
        if (this.animationFrameRemaining) {
            this.animationFrameRemaining = Math.max(this.animationFrameRemaining - 3, 0);
        }
        if (!this.animationFrameRemaining) {
            const tp = tpInfos.find(
                (tpInfo) =>
                    tpInfo.position.gridX === this.gridX &&
                    tpInfo.position.gridY === this.gridY &&
                    tpInfo.position.floor === this.floor &&
                    tpInfo.position.mapIndex === this.mapIndex
            );

            if (tp) {
                setNextPosition(tp.nextPosition);
                return;
            }
        }

        if (direction && !this.animationFrameRemaining) {
            this.animationDirection = direction;
            switch (direction) {
                case Direction.Down:
                    if (blocks.find((block) => block.gridX === this.gridX && block.gridY === this.gridY + 1)) {
                        return;
                    }
                    this.gridY++;
                    break;
                case Direction.Up:
                    if (blocks.find((block) => block.gridX === this.gridX && block.gridY === this.gridY - 1)) {
                        return;
                    }
                    this.gridY--;
                    break;
                case Direction.Right:
                    if (blocks.find((block) => block.gridX === this.gridX + 1 && block.gridY === this.gridY)) {
                        return;
                    }
                    this.gridX++;
                    break;
                case Direction.Left:
                    if (blocks.find((block) => block.gridX === this.gridX - 1 && block.gridY === this.gridY)) {
                        return;
                    }
                    this.gridX--;
                    break;
            }
            this.animationFrameRemaining = this.tileWidth;
        }
    }
}
