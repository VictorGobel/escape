export class Block {
    public gridX: number;
    public gridY: number;
    public tileWidth: number;
    public tileHeight: number;
    public context: CanvasRenderingContext2D;

    constructor({
        context,
        gridX,
        gridY,
        tileWidth,
        tileHeight,
    }: {
        context: CanvasRenderingContext2D;
        gridX: number;
        gridY: number;
        tileWidth: number;
        tileHeight: number;
    }) {
        this.context = context;
        this.gridX = gridX;
        this.gridY = gridY;
        this.tileWidth = tileWidth;
        this.tileHeight = tileHeight;
    }

    draw() {
        this.context.fillStyle = 'rgb(255,0,0,0.5)';

        this.context.fillRect(
            this.gridX * this.tileWidth,
            this.gridY * this.tileHeight,
            this.tileWidth,
            this.tileHeight
        );
    }
}
