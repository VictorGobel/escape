export enum TPType {
    Circle = 'Circle',
    Rect = 'Rect',
    Arc = 'Arc',
    DoubleArc = 'DoubleArc',
    QuadArc = 'QuadArc',
}

export class TP {
    public gridX: number;
    public gridY: number;
    public mapIndex: number;
    public tileWidth: number;
    public tileHeight: number;
    public type: TPType;
    public context: CanvasRenderingContext2D;

    public color: string;
    public animationStep1 = 0;

    constructor({
        color,
        context,
        gridX,
        gridY,
        mapIndex,
        tileWidth,
        tileHeight,
        type,
    }: {
        color: string;
        context: CanvasRenderingContext2D;
        gridX: number;
        gridY: number;
        mapIndex: number;
        tileWidth: number;
        tileHeight: number;
        type: TPType;
    }) {
        this.color = color;
        this.context = context;
        this.gridX = gridX;
        this.gridY = gridY;
        this.mapIndex = mapIndex;
        this.tileWidth = tileWidth;
        this.tileHeight = tileHeight;
        this.type = type;
    }

    draw() {
        if (this.type === TPType.Circle) {
            this.context.strokeStyle =
                this.color +
                Math.floor(255 - (this.animationStep1 * 220) / (this.tileWidth / 3))
                    .toString(16)
                    .padStart(2, '0');

            this.context.beginPath();
            this.context.arc(
                (this.gridX + 0.5) * this.tileWidth,
                (this.gridY + 0.5) * this.tileHeight,
                Math.floor(this.animationStep1),
                0,
                2 * Math.PI
            );
            this.context.stroke();

            // this.context.beginPath();
            // this.context.arc(
            //     (this.gridX + 0.5) * this.tileWidth,
            //     (this.gridY + 0.5) * this.tileHeight,
            //     Math.max(Math.floor(this.animationStep1) - 1, 0),
            //     0,
            //     2 * Math.PI
            // );
            // this.context.stroke();

            this.context.beginPath();
            this.context.arc(
                (this.gridX + 0.5) * this.tileWidth,
                (this.gridY + 0.5) * this.tileHeight,
                Math.floor(this.animationStep1) + 1,
                0,
                2 * Math.PI
            );
            this.context.stroke();
        }
        if (this.type === TPType.Rect) {
            this.context.fillStyle =
                this.color +
                Math.floor(255 - (this.animationStep1 * 220) / (this.tileWidth / 3))
                    .toString(16)
                    .padStart(2, '0');
            this.context.fillRect(
                (this.gridX + 0.5) * this.tileWidth - Math.floor(this.animationStep1),
                (this.gridY + 0.5) * this.tileHeight - Math.floor(this.animationStep1),
                2 * Math.floor(this.animationStep1),
                2 * Math.floor(this.animationStep1)
            );
        }

        if (this.type === TPType.Arc) {
            this.context.strokeStyle = this.color;
            this.context.beginPath();
            this.context.arc(
                (this.gridX + 0.5) * this.tileWidth,
                (this.gridY + 0.5) * this.tileHeight,
                this.tileWidth / 4,
                0 + (this.animationStep1 * 2 * Math.PI) / (this.tileWidth / 3),
                (Math.PI * 2) / 3 + (this.animationStep1 * 2 * Math.PI) / (this.tileWidth / 3)
            );
            this.context.stroke();
            this.context.beginPath();
            this.context.arc(
                (this.gridX + 0.5) * this.tileWidth,
                (this.gridY + 0.5) * this.tileHeight,
                this.tileWidth / 4 + 1,
                0 + (this.animationStep1 * 2 * Math.PI) / (this.tileWidth / 3),
                (Math.PI * 2) / 3 + (this.animationStep1 * 2 * Math.PI) / (this.tileWidth / 3)
            );
            this.context.stroke();
        }

        if (this.type === TPType.DoubleArc) {
            this.context.strokeStyle = this.color;
            this.context.beginPath();
            this.context.arc(
                (this.gridX + 0.5) * this.tileWidth,
                (this.gridY + 0.5) * this.tileHeight,
                this.tileWidth / 4,
                0 + (this.animationStep1 * 2 * Math.PI) / (this.tileWidth / 3),
                (Math.PI * 1) / 3 + (this.animationStep1 * 2 * Math.PI) / (this.tileWidth / 3)
            );
            this.context.stroke();
            this.context.beginPath();
            this.context.arc(
                (this.gridX + 0.5) * this.tileWidth,
                (this.gridY + 0.5) * this.tileHeight,
                this.tileWidth / 4 + 1,
                0 + (this.animationStep1 * 2 * Math.PI) / (this.tileWidth / 3),
                (Math.PI * 1) / 3 + (this.animationStep1 * 2 * Math.PI) / (this.tileWidth / 3)
            );
            this.context.stroke();

            this.context.beginPath();
            this.context.arc(
                (this.gridX + 0.5) * this.tileWidth,
                (this.gridY + 0.5) * this.tileHeight,
                this.tileWidth / 4,
                Math.PI + (this.animationStep1 * 2 * Math.PI) / (this.tileWidth / 3),
                Math.PI + (Math.PI * 1) / 3 + (this.animationStep1 * 2 * Math.PI) / (this.tileWidth / 3)
            );
            this.context.stroke();
            this.context.beginPath();
            this.context.arc(
                (this.gridX + 0.5) * this.tileWidth,
                (this.gridY + 0.5) * this.tileHeight,
                this.tileWidth / 4 + 1,
                Math.PI + (this.animationStep1 * 2 * Math.PI) / (this.tileWidth / 3),
                Math.PI + (Math.PI * 1) / 3 + (this.animationStep1 * 2 * Math.PI) / (this.tileWidth / 3)
            );
            this.context.stroke();
        }

        if (this.type === TPType.QuadArc) {
            this.context.strokeStyle = this.color;
            this.context.beginPath();
            this.context.arc(
                (this.gridX + 0.5) * this.tileWidth,
                (this.gridY + 0.5) * this.tileHeight,
                this.tileWidth / 4,
                0 + (this.animationStep1 * 2 * Math.PI) / (this.tileWidth / 3),
                (Math.PI * 1) / 3 + (this.animationStep1 * 2 * Math.PI) / (this.tileWidth / 3)
            );
            this.context.stroke();
            this.context.beginPath();
            this.context.arc(
                (this.gridX + 0.5) * this.tileWidth,
                (this.gridY + 0.5) * this.tileHeight,
                this.tileWidth / 4 + 1,
                0 + (this.animationStep1 * 2 * Math.PI) / (this.tileWidth / 3),
                (Math.PI * 1) / 3 + (this.animationStep1 * 2 * Math.PI) / (this.tileWidth / 3)
            );
            this.context.stroke();

            this.context.beginPath();
            this.context.arc(
                (this.gridX + 0.5) * this.tileWidth,
                (this.gridY + 0.5) * this.tileHeight,
                this.tileWidth / 4,
                Math.PI / 2 + (this.animationStep1 * 2 * Math.PI) / (this.tileWidth / 3),
                Math.PI / 2 + (Math.PI * 1) / 3 + (this.animationStep1 * 2 * Math.PI) / (this.tileWidth / 3)
            );
            this.context.stroke();
            this.context.beginPath();
            this.context.arc(
                (this.gridX + 0.5) * this.tileWidth,
                (this.gridY + 0.5) * this.tileHeight,
                this.tileWidth / 4 + 1,
                Math.PI / 2 + (this.animationStep1 * 2 * Math.PI) / (this.tileWidth / 3),
                Math.PI / 2 + (Math.PI * 1) / 3 + (this.animationStep1 * 2 * Math.PI) / (this.tileWidth / 3)
            );
            this.context.stroke();

            this.context.beginPath();
            this.context.arc(
                (this.gridX + 0.5) * this.tileWidth,
                (this.gridY + 0.5) * this.tileHeight,
                this.tileWidth / 4,
                Math.PI + (this.animationStep1 * 2 * Math.PI) / (this.tileWidth / 3),
                Math.PI + (Math.PI * 1) / 3 + (this.animationStep1 * 2 * Math.PI) / (this.tileWidth / 3)
            );
            this.context.stroke();
            this.context.beginPath();
            this.context.arc(
                (this.gridX + 0.5) * this.tileWidth,
                (this.gridY + 0.5) * this.tileHeight,
                this.tileWidth / 4 + 1,
                Math.PI + (this.animationStep1 * 2 * Math.PI) / (this.tileWidth / 3),
                Math.PI + (Math.PI * 1) / 3 + (this.animationStep1 * 2 * Math.PI) / (this.tileWidth / 3)
            );
            this.context.stroke();

            this.context.beginPath();
            this.context.arc(
                (this.gridX + 0.5) * this.tileWidth,
                (this.gridY + 0.5) * this.tileHeight,
                this.tileWidth / 4,
                (Math.PI * 3) / 2 + (this.animationStep1 * 2 * Math.PI) / (this.tileWidth / 3),
                (Math.PI * 3) / 2 + (Math.PI * 1) / 3 + (this.animationStep1 * 2 * Math.PI) / (this.tileWidth / 3)
            );
            this.context.stroke();
            this.context.beginPath();
            this.context.arc(
                (this.gridX + 0.5) * this.tileWidth,
                (this.gridY + 0.5) * this.tileHeight,
                this.tileWidth / 4 + 1,
                (Math.PI * 3) / 2 + (this.animationStep1 * 2 * Math.PI) / (this.tileWidth / 3),
                (Math.PI * 3) / 2 + (Math.PI * 1) / 3 + (this.animationStep1 * 2 * Math.PI) / (this.tileWidth / 3)
            );
            this.context.stroke();
        }

        this.animationStep1 = this.animationStep1 >= this.tileWidth / 3 ? 0 : this.animationStep1 + 0.1;
    }
}
