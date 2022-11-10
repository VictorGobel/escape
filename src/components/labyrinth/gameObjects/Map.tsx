export class MapObject {
    public width: number;
    public height: number;
    public imageUrl: string;
    public image: HTMLImageElement;
    public floorImagesUrl: string[];
    public floorImages: HTMLImageElement[];
    public floorImagesLoaded: boolean[];
    public isLoaded: boolean = false;
    public context: CanvasRenderingContext2D;

    constructor({
        context,
        width,
        height,
        imageUrl,
        floorImagesUrl,
    }: {
        context: CanvasRenderingContext2D;
        width: number;
        height: number;
        imageUrl: string;
        floorImagesUrl: string[];
    }) {
        this.context = context;
        this.width = width;
        this.height = height;
        this.imageUrl = imageUrl;
        this.floorImagesUrl = floorImagesUrl;

        const image = new Image();
        image.src = this.imageUrl;
        image.onload = () => {
            this.isLoaded = true;
        };
        this.image = image;

        this.floorImagesLoaded = [];
        this.floorImages = floorImagesUrl.map((url, index) => {
            const floorImage = new Image();
            floorImage.src = url;
            floorImage.onload = () => {
                this.floorImagesLoaded[index] = true;
            };

            return floorImage;
        });
    }

    draw() {
        if (this.isLoaded) {
            this.context.drawImage(this.image, 0, 0, this.width, this.height);
        }
    }
    drawFloor(floorIndex: number) {
        if (this.floorImagesLoaded[floorIndex]) {
            this.context.drawImage(this.floorImages[floorIndex], 0, 0, this.width, this.height);
        }
    }
}
