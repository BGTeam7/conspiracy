export default function SceneManager(p5) {
    p5.setup = () => {
    p5.createCanvas(800, 450);
    p5.background(0);
    radioBase = new Radio();
    theta = p5.TWO_PI/3;
    
    };

    // This function runs once every frame, and can be used to detect if a certain thing happens once a frame
    p5.draw = () => {
        radioBase.rotateTone(300,225);
        radioBase.rotateDistortion(250,225);
        radioBase.rotatePitch(200,225);
    };

    
};