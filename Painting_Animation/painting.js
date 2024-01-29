const static = (sketch) => {
    sketch.setup = () => {
        let canvas = sketch.createCanvas(640, 640);
        canvas.id("staticCanvas");
    }
    sketch.draw = () => {
        sketch.background(210, 200, 190);
        sketch.noStroke();
        sketch.fill(160, 165, 170);
        sketch.triangle(0, 0, 220, 0, 0, 220);
        sketch.fill(40, 35, 35);
        sketch.triangle(250, -40, 250, 640, -90, 300);
        sketch.fill(205, 165, 65);
        sketch.triangle(0, 390, 120, 510, 0, 630);
        sketch.fill(177, 25, 0);
        sketch.triangle(250, 390, 640, 0, 640, 780);
        sketch.fill(115, 105, 110);
        sketch.triangle(320, 0, 480, 160, 640, 0);
        sketch.fill(170, 175, 180);
        sketch.triangle(250, 390, 500, 640, 250, 640);
    }
}

var strokeCount = 0;

const dynamic = (sketch) => {
    sketch.setup = () => {
        let canvas = sketch.createCanvas(640, 640);
        canvas.id("dynamicCanvas");
        canvas.mousePressed(() => {
            strokeCount = strokeCount + 1;
            if (strokeCount > 6) {
                strokeCount = 0;
            }
        });
    }
    sketch.draw = () => {
        sketch.background(210, 200, 190);
        sketch.noStroke();
        if (strokeCount > 0) {
            sketch.fill(160, 165, 170);
            sketch.triangle(0, 0, 220, 0, 0, 220);
        }
        if (strokeCount > 1) {
            sketch.fill(40, 35, 35);
            sketch.triangle(250, -40, 250, 640, -90, 300);
        }
        if (strokeCount > 2) {
            sketch.fill(205, 165, 65);
            sketch.triangle(0, 390, 120, 510, 0, 630);
        }
        if (strokeCount > 3) {
            sketch.fill(115, 105, 110);
            sketch.triangle(320, 0, 480, 160, 640, 0);
        }
        if (strokeCount > 4) {
            sketch.fill(177, 25, 0);
            sketch.triangle(250, 390, 640, 0, 640, 780);
        }
        if (strokeCount > 5) {
            sketch.fill(170, 175, 180);
            sketch.triangle(250, 390, 500, 640, 250, 640);
        }
    }
}

let static_p5 = new p5(static);
let dynamic_p5 = new p5(dynamic);

