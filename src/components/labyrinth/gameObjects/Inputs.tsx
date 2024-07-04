import { Direction, KeyboardKeyToDirection, KeybordKey } from '../constants';

export class Inputs {
    public directionsPressed: Direction[] = [];
    public isEnterPressed: boolean = false;
    public createdAt = new Date();

    addKeyInput(event: KeyboardEvent) {
        if (event.key.toLowerCase() === 'enter') {
            this.isEnterPressed = true;
        }

        const associatedDirection: Direction | undefined =
            KeyboardKeyToDirection?.[event.key.toLowerCase() as KeybordKey];
        if (!associatedDirection) {
            return;
        }
        event.preventDefault();
        if (!this.directionsPressed.includes(associatedDirection)) {
            this.directionsPressed.unshift(associatedDirection);
        }
    }

    removeKeyInput(event: KeyboardEvent) {
        if (event.key.toLowerCase() === 'enter') {
            this.isEnterPressed = false;
        }

        const associatedDirection: Direction | undefined =
            KeyboardKeyToDirection?.[event.key.toLowerCase() as KeybordKey];

        if (!associatedDirection) {
            return;
        }
        if (this.directionsPressed.includes(associatedDirection)) {
            this.directionsPressed = this.directionsPressed.filter((value) => value !== associatedDirection);
        }
    }

    getCurrentDirection(): Direction | null {
        return this.directionsPressed?.[0] ?? null;
    }

    init() {
        window.addEventListener('keydown', this.addKeyInput.bind(this));
        window.addEventListener('keyup', this.removeKeyInput.bind(this));
    }

    unmount() {
        window.removeEventListener('keydown', this.addKeyInput);
        window.removeEventListener('keyup', this.removeKeyInput);
    }
}
