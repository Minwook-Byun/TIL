import {
    Text
} from "./text.js";
import {
    Particle
} from "./particle.js";

export const RANDOM_TEXT = `LIFELABfasdf`;

export class Visual {
    constructor() {
        this.text = new Text();

        this.textArr = RANDOM_TEXT.split('');

        this.particles = [];

        this.mouse = {
            x: 0,
            y: 0,
            radius: 100
        };

        document.addEventListener('pointermove', this.onMove.bind(this), false);
    }

    show(stageWidth, stageHeight) {
        const str = this.textArr[Math.round(Math.random() * (this.textArr.length))]
        this.pos = this.text.setText(str, 26, stageWidth, stageHeight);

        this.particles = [];
        for (let i = 0; i < this.pos.length; i++) {
            const item = new Particle(this.pos[i]);
            this.particles.push(item);
        }
    }

    animate(ctx, t) {
        for (let i = 0; i < this.particles.length; i++) {
            const item = this.particles[i];

            item.draw(ctx, t);
        }
    }

    onMove(e) {
        this.mouse.x = e.clientX;
        this.mouse.y = e.clientY;
    }
}