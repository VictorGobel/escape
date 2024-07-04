import { Inputs } from './Inputs';
import { Player } from './Player';

import stele from '../assets/stele.png';

const startingSteles: boolean[] = [false, false, false, false];

function setStelesToStorage(steles: boolean[]) {
    window.localStorage.setItem('steles', JSON.stringify(steles));
}

function getStelesFromStorage(): boolean[] {
    const stelesRaw = window.localStorage.getItem('steles');
    const steles = stelesRaw ? JSON.parse(stelesRaw) : [];
    if (!steles.length) {
        setStelesToStorage(startingSteles);

        return startingSteles;
    }

    return steles;
}

export class Text {
    public mapIndex: number;
    public canvasWidth: number;
    public canvasHeight: number;
    public tileWidth: number;
    public tileHeight: number;
    public activatedStele: boolean[] = [false, false, false, false];

    public image: HTMLImageElement;
    public imageLoaded: boolean;
    public context: CanvasRenderingContext2D;

    constructor({
        context,
        mapIndex,
        canvasWidth,
        canvasHeight,
        tileWidth,
        tileHeight,
    }: {
        context: CanvasRenderingContext2D;
        mapIndex: number;
        canvasWidth: number;
        canvasHeight: number;
        tileWidth: number;
        tileHeight: number;
    }) {
        this.context = context;
        this.mapIndex = mapIndex;
        this.canvasWidth = canvasWidth;
        this.canvasHeight = canvasHeight;
        this.tileWidth = tileWidth;
        this.tileHeight = tileHeight;
        this.activatedStele = getStelesFromStorage();

        this.imageLoaded = false;
        const image = new Image();
        image.src = stele;
        image.onload = () => {
            this.imageLoaded = true;
        };
        this.image = image;
    }

    draw(player: Player, inputs: Inputs) {
        this.context.strokeStyle = '#ffffff';
        this.context.fillStyle = '#ffffff';
        this.context.textAlign = 'center';
        this.context.font = this.canvasHeight / 20 + 'px sans-serif';

        const stelesPositions = [
            ['1-3', '2-2', '2-4', '3-3'],
            ['12-3', '13-2', '13-4', '14-3'],
            ['1-9', '2-8', '2-10', '3-9'],
            ['12-9', '13-8', '13-10', '14-9'],
        ];

        const steleIndex = stelesPositions.findIndex((stelePositions) =>
            stelePositions.includes(player.gridX + '-' + player.gridY)
        );

        if (steleIndex !== -1 && this.mapIndex === 0 && !this.activatedStele[steleIndex]) {
            if (inputs.isEnterPressed) {
                this.activatedStele[steleIndex] = true;
                setStelesToStorage(this.activatedStele);
            }

            // this.context.strokeText('Appuyez sur entrer', this.canvasWidth / 2, this.canvasHeight - 10);

            this.context.fillText('Appuyez sur entrer', this.canvasWidth / 2, this.canvasHeight - 10);
        } else if (this.mapIndex === 0) {
            // this.context.strokeText('Activez les quatres stèles', this.canvasWidth / 2, this.canvasHeight - 10);
            this.context.fillText('Activez les quatres stèles', this.canvasWidth / 2, this.canvasHeight - 10);
        }

        if (this.activatedStele[0]) {
            if (this.imageLoaded) {
                this.context.drawImage(
                    this.image,
                    this.tileWidth * 2,
                    this.tileHeight * 2,
                    this.tileWidth,
                    this.tileHeight * 2
                );
            }
        }

        if (this.activatedStele[1]) {
            if (this.imageLoaded) {
                this.context.drawImage(
                    this.image,
                    this.tileWidth * 13,
                    this.tileHeight * 2,
                    this.tileWidth,
                    this.tileHeight * 2
                );
            }
        }

        if (this.activatedStele[2]) {
            if (this.imageLoaded) {
                this.context.drawImage(
                    this.image,
                    this.tileWidth * 2,
                    this.tileHeight * 8,
                    this.tileWidth,
                    this.tileHeight * 2
                );
            }
        }

        if (this.activatedStele[3]) {
            if (this.imageLoaded) {
                this.context.drawImage(
                    this.image,
                    this.tileWidth * 13,
                    this.tileHeight * 8,
                    this.tileWidth,
                    this.tileHeight * 2
                );
            }
        }
    }
}
