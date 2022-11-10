import { useContext, useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import styled, { ThemeContext } from 'styled-components';
import { BodyType, Mail } from '../../constants/mail';
import psykokwak from '../../assets/image/psykokwak.png';
import snorlax from '../../assets/image/snorlax.png';
import gastly from '../../assets/image/gastly.png';
import salameche from '../../assets/image/salameche.png';
import { ThemeName } from 'constants/theme';

const IMAGE_CONST = [
    {
        image: psykokwak,
        gap: 1,
        size: 1,
        mouseDistance: 2000,
        force: 1500,
        vDiminution: 0.2,
        windowRatio: 0.1,
        canvasRatio: 1,
        imageRatio: 142 / 194,
    },
    {
        image: snorlax,
        gap: 10,
        size: 9,
        mouseDistance: 5000,
        force: 4000,
        vDiminution: 0.95,
        windowRatio: 0.6,
        canvasRatio: 1,
        imageRatio: 347 / 361,
    },
    {
        image: gastly,
        gap: 2,
        size: 2,
        mouseDistance: 5000,
        force: 300000,
        vDiminution: 0.8,
        windowRatio: 0.3,
        canvasRatio: 1 / 3,
        imageRatio: 266 / 189,
    },
    {
        image: salameche,
        gap: 20,
        size: 20,
        mouseDistance: 250,
        force: 200,
        vDiminution: 0.9999,
        windowRatio: 0.3,
        canvasRatio: 1,
        imageRatio: 225 / 225,
    },
];

class Particle {
    public x: number;
    public y: number;
    public originX: number;
    public originY: number;
    public color: string;
    public size: number;
    public vx: number;
    public vy: number;
    public ease: number;
    public controller: ParticuleController;

    constructor({ x, y, color, controller }: { x: number; y: number; color: string; controller: ParticuleController }) {
        this.x = x;
        this.controller = controller;
        this.y = y;
        this.originX = x;
        this.originY = y;
        this.color = color;
        this.size = this.controller.imageConst.size;
        this.vx = 0;
        this.vy = 0;
        this.ease = 0.2;
    }

    draw(context: CanvasRenderingContext2D) {
        context.fillStyle = this.color;
        context.fillRect(Math.round(this.x), Math.round(this.y), this.size, this.size);
    }

    update() {
        const dx = this.controller.mouseX - (this.x + this.size / 2);
        const dy = this.controller.mouseY - (this.y + this.size / 2);
        const distance = Math.pow(dx, 2) + Math.pow(dy, 2);

        if (distance < this.controller.imageConst.mouseDistance) {
            const angle = Math.atan2(dy, dx);
            const force = -this.controller.imageConst.force / distance;
            this.vx += force * Math.cos(angle);
            this.vy += force * Math.sin(angle);
        }
        this.vx *= this.controller.imageConst.vDiminution;
        this.vy *= this.controller.imageConst.vDiminution;

        this.x += this.vx + (this.originX - this.x) * this.ease;
        this.y += this.vy + (this.originY - this.y) * this.ease;
    }
}

class ParticuleController {
    public imageIndex: number;
    public image: HTMLImageElement;
    public imageConst: typeof IMAGE_CONST[0];
    public particles: Particle[];
    public width: number;
    public height: number;
    public imageWidth: number;
    public imageHeight: number;
    public gap: number;
    public mouseX: number;
    public mouseY: number;
    public timingFrameCount: number;
    public displayedNumbers: string[];
    public displayedNumberIndex: number;

    constructor({
        image,
        imageIndex,
        canvasWidth,
        canvasHeight,
    }: {
        image: HTMLImageElement;
        imageIndex: number;
        canvasWidth: number;
        canvasHeight: number;
    }) {
        this.particles = [];
        this.image = image;
        this.imageConst = IMAGE_CONST[imageIndex];
        this.imageIndex = imageIndex;
        this.width = canvasWidth;
        this.height = canvasHeight;
        this.imageWidth = this.width * this.imageConst.canvasRatio;
        this.imageHeight = this.height * this.imageConst.canvasRatio;
        this.gap = IMAGE_CONST[imageIndex].gap;
        this.mouseX = -100000;
        this.mouseY = -100000;
        this.timingFrameCount = 0;
        this.displayedNumbers = ['+3', '-1', '+2', '+2', '-1', '='];
        this.displayedNumberIndex = 0;
    }

    init(context: CanvasRenderingContext2D) {
        context.drawImage(
            this.image,
            (this.width - this.imageWidth) / 2,
            (this.height - this.imageHeight) / 2,
            this.imageWidth,
            this.imageHeight
        );

        const pixels = context.getImageData(0, 0, this.width, this.height).data;
        for (let y = 0; y < this.height; y += this.gap) {
            for (let x = 0; x < this.width; x += this.gap) {
                const pixelIndex = (y * this.width + x) * 4;
                const red = pixels[pixelIndex];
                const green = pixels[pixelIndex + 1];
                const blue = pixels[pixelIndex + 2];
                const alpha = pixels[pixelIndex + 3];

                const color = `rgb(${red},${green},${blue}, ${alpha})`;

                if (alpha > 0) {
                    this.particles.push(new Particle({ color, x, y, controller: this }));
                }
            }
        }
    }

    draw(context: CanvasRenderingContext2D) {
        if (this.imageIndex === 0) {
            context.font = '100px Arial';
            context.strokeStyle = 'green';
            context.strokeText('2', (this.width * 3.5) / 10, (this.height * 7) / 10);
        } else if (this.imageIndex === 1) {
            context.font = '20px Arial';
            context.strokeStyle = 'lightblue';
            context.strokeText('+5', (this.width * 4) / 10, (this.height * 2) / 10);
            context.strokeText('-8', (this.width * 8) / 10, (this.height * 3) / 10);
            context.strokeText('+2', (this.width * 2) / 10, (this.height * 5) / 10);
            context.strokeText('+2', (this.width * 4) / 10, (this.height * 6) / 10);
            context.strokeText('+2', (this.width * 7) / 10, (this.height * 7) / 10);
            context.strokeText('+2', (this.width * 3) / 10, (this.height * 9) / 10);
            context.strokeText('+2', (this.width * 7.5) / 10, (this.height * 9.5) / 10);
        } else if (this.imageIndex === 2) {
            this.timingFrameCount++;
            if (this.timingFrameCount > 60) {
                this.timingFrameCount = 0;
                this.displayedNumberIndex++;
                if (this.displayedNumberIndex >= this.displayedNumbers.length) {
                    this.displayedNumberIndex = 0;
                }
            }

            context.font = '18px Arial';
            context.strokeStyle = 'purple';
            context.fillStyle = 'purple';
            context.fillText(
                this.displayedNumbers[this.displayedNumberIndex],
                (this.width * 48) / 100,
                (this.height * 52) / 100
            );
            context.fillRect(
                (this.width * 49) / 100 - this.imageWidth / 10,
                (this.height * 55) / 100,
                (((this.imageWidth * 2) / 10) * this.timingFrameCount) / 60,
                5
            );
        } else if (this.imageIndex === 3) {
            context.font = '20px Arial';
            context.fillStyle = 'orange';
            context.fillText('6', Math.round((this.width * 3.5) / 10), Math.round((this.height * 7) / 10));
        }
        this.particles.forEach((particle) => particle.draw(context));
    }

    update() {
        this.particles.forEach((particle) => particle.update());
    }
}

export const ImageParticlesComponent = ({ imageIndex }: { imageIndex: number }) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const animationRef = useRef<number>();
    const [imageLoaded, setImageLoaded] = useState<boolean>(false);
    const theme = useContext(ThemeContext);

    const imageConst = IMAGE_CONST[imageIndex];
    const image = new Image();
    image.src = imageConst.image;
    image.onload = () => setImageLoaded(true);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) {
            return;
        }
        const context = canvas.getContext('2d');

        if (!context) {
            return;
        }

        if (!imageLoaded) {
            return;
        }

        canvas.width = window.innerWidth * imageConst.windowRatio;
        canvas.height = canvas.width / imageConst.imageRatio;
        // canvas.width = imageConst.canvasWidth;
        // canvas.height = imageConst.canvasHeight;

        const particuleController = new ParticuleController({
            image,
            imageIndex,
            canvasHeight: canvas.height,
            canvasWidth: canvas.width,
        });
        particuleController.init(context);

        function animate({ canvas, context }: { canvas: HTMLCanvasElement; context: CanvasRenderingContext2D }) {
            context.clearRect(0, 0, canvas.width, canvas.height);
            if (particuleController.imageIndex !== 2 || theme.name === ThemeName.Dark) {
                particuleController.draw(context);
            }
            particuleController.update();
            animationRef.current = requestAnimationFrame(() => animate({ canvas, context }));
        }

        animate({ canvas, context });

        const updateMouse = (event: MouseEvent) => {
            particuleController.mouseX = event.offsetX;
            particuleController.mouseY = event.offsetY;
        };
        const leaveMouse = (event: MouseEvent) => {
            particuleController.mouseX = -100000;
            particuleController.mouseY = -100000;
        };

        canvas.addEventListener('mousemove', updateMouse);
        canvas.addEventListener('mouseleave', leaveMouse);

        // 👇️ remove the event listener when component unmounts
        return () => {
            canvas.removeEventListener('mousemove', updateMouse);
            canvas.removeEventListener('mouseleave', leaveMouse);
            if (animationRef.current) {
                cancelAnimationFrame(animationRef.current);
            }
        };
    }, [canvasRef.current, imageLoaded]);

    return <Canvas ref={canvasRef} />;
};

const Canvas = styled.canvas`
    display: block;
    /* border: 1px solid ${({ theme }) => theme.mailing.color.highlight}; */
`;
