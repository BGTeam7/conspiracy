//GLOBAL VARIABLES
let gameState = "home"

//SOUNDBYTE VARIABLES
var radioBase;
var tone, pitch, distort;
var dialogue;
var sound; // need to load this on setup

var radioBase;

let theta;
let targetAngle = 0.0;
let currentAngle = 0.0;
let smoothSpeed = 0.05;

//NODES VARIABLES
let nodules = []
let angle = 10;
let links = []
let nodes = 30;
let c1, c2;

let word = "text";
let font;
//===================================



export default function SceneManager(p5) {
    p5.setup = () => {
    p5.createCanvas(800, 450);
    p5.background(255);
    initNodes()
    
    };

    // This function runs once every frame, and can be used to detect if a certain thing happens once a frame
    p5.draw = () => {
        switch(gameState) {
            case "home":
                // console.log("home");
                // drawNodes()
                drawNodes()
                break;
            case "morse":
                console.log("morse");
                drawMorse()
                break;
            // case "threedee":
            //     console.log("home");
            //     break;
            // case "runner":
            //     console.log("runner");
            //     break;
            // case "newstream":
            //     console.log("newstream");
            //     break;
            case "soundbyte":
                console.log("soundbyte");
                drawSoundByte()
                break;
        }
        //if game state = soundbyte then loop soundbyte draw function
        //or do a switch statement idk

    };

    function initHome() {
        p5.background("blue");
    }

    function drawHome() {
        // p5.background("red");
        p5.text("this is home", 50, 50)
    }

    function initMorse() {
        gameState = "morse"
        p5.resizeCanvas(1000, 500);
        p5.stroke("black")
    }

    function drawMorse() {
        p5.background("white")
        p5.text("this is Morse", 50, 50)
    }

    function initSoundByte() {
        p5.createCanvas(800, 450);
        p5.background(0);
        console.log("init time")
        gameState = "soundbyte"
        radioBase = new Radio();
        theta = p5.TWO_PI/3;
    }

    function drawSoundByte() {
        radioBase.rotateTone(300,225);
        radioBase.rotateDistortion(250,225);
        radioBase.rotatePitch(200,225);
    }

    // This function loads the sound that will be modified here as a .wav file. 
    function loadNewSound () {

    };

    // The sound will be modified here based on the value of the .wav and the  value of the tone, pitch and distort values. 
    function modifySound () {
    sound.tone = tone;
    sound.pitch = pitch;
    sound.distort = distort;

    };

    //This function draws the radio element. 
    class Radio {
        // the constructor draws an initial radio
        constructor(){
            this.base = p5.rect(100,200, 300, 150);
            console.log("test")
            this.tone(300,225);
            this.distort(250,225);
            this.pitch(200,225);   

        }
        tone(x,y){
            p5.stroke(p5.color(0, 0, 0));//color of shape
            this.tone = p5.circle(x, y, 40) ;
            p5.stroke(p5.color(0, 255, 0));//color of direction line
            this.toneLine = p5.line(x, 210, x, 240);
        }
        distort(x,y){
            p5.stroke(p5.color(0, 0, 0));//color of shape
            this.distort = p5.circle(x, y, 40);
            p5.stroke(p5.color(0, 255, 0));//color of direction line
            this.distortLine = p5.line(x, 210, x, 240);
        }
        pitch(x,y){
            p5.stroke(p5.color(0, 0, 0));//color of shape
            this.pitch = p5.circle(x, y, 40);
            p5.stroke(p5.color(0, 255,0));//color of direction line
            this.pitchLine = p5.line(x, 210, x, 240);
        }
        rotateTone(x,y){
            //Found this resource - https://editor.p5js.org/lliu29/sketches/NeGyR6QJ, hopefully this will be helpful as a ref!
            targetAngle = p5.atan2(p5.mouseY - y, p5.mouseX - x);
        currentAngle = lerpAngle(currentAngle, targetAngle, smoothSpeed);
            // Used this as a ref - https://p5js.org/reference/p5/if/
            if (p5.mouseIsPressed && (p5.mouseX < (x+20) && p5.mouseX > (x-20) && p5.mouseY < (y+20) && p5.mouseY > (y-20))){
            
            p5.stroke(p5.color(0, 0, 0));//color of shape
            this.tone = p5.circle(x, y, 40) ;

            p5.stroke(p5.color(255, 0, 0)); //direction facing the mouse
            this.toneLineCursor = p5.line(x,y,x+p5.cos(targetAngle) * 20.0, y + p5.sin(targetAngle) * 20.0);

            p5.stroke(p5.color(0, 0, 0));//direction where it left off
            this.toneLine = p5.line(x, y, x + p5.cos(currentAngle) * 20.0, y + p5.sin(currentAngle) * 20.0);

            // noStroke();
            }
        }
        // -- USING THIS TO TEST CLICK FUNCTIONALITY--!!
        rotatePitch(x,y){
            //Found this resource - https://editor.p5js.org/lliu29/sketches/NeGyR6QJ, hopefully this will be helpful as a ref!
            targetAngle = p5.atan2(p5.mouseY - y, p5.mouseX - x);
        currentAngle = lerpAngle(currentAngle, targetAngle, smoothSpeed);
            
            // Used this as a ref - https://p5js.org/reference/p5/if/
            if (p5.mouseIsPressed && (p5.mouseX < (x+20) && p5.mouseX > (x-20) && p5.mouseY < (y+20) && p5.mouseY > (y-20))){
                p5.stroke(p5.color(0, 0, 0));//color of shape
                this.pitch = p5.circle(x, y, 40) ;

                p5.stroke(p5.color(255, 0, 0)); //direction facing the mouse
                this.pitchLineCursor = p5.line(x,y,x+p5.cos(targetAngle) * 20.0, y + p5.sin(targetAngle) * 20.0);

                p5.stroke(p5.color(0, 255, 0));//direction where it left off
                this.pitchLine = p5.line(x, y, x + p5.cos(currentAngle) * 20.0, y + p5.sin(currentAngle) * 20.0);

                // noStroke();
            
            }    
        }
        rotateDistortion(x,y){
            //Found this resource - https://editor.p5js.org/lliu29/sketches/NeGyR6QJ, hopefully this will be helpful as a ref!
            targetAngle = p5.atan2(p5.mouseY - y, p5.mouseX - x);
        currentAngle = lerpAngle(currentAngle, targetAngle, smoothSpeed);
            // Used this as a ref - https://p5js.org/reference/p5/if/
            if (p5.mouseIsPressed && (p5.mouseX < (x+20) && p5.mouseX > (x-20) && p5.mouseY < (y+20) && p5.mouseY > (y-20))){
            
            p5.stroke(p5.color(0, 0, 0));//color of shape
            this.distortion = p5.circle(x, y, 40) ;

            p5.stroke(p5.color(255, 0, 0)); //direction facing the mouse
            this.distortionLineCursor = p5.line(x,y,x+p5.cos(targetAngle) * 20.0, y + p5.sin(targetAngle) * 20.0);

            p5.stroke(p5.color(0, 0, 255));//direction where it left off
            this.distortionLine = p5.line(x, y, x + p5.cos(currentAngle) * 20.0, y + p5.sin(currentAngle) * 20.0);

            // noStroke();
            }
        }
    }
    function lerpAngle(a,b,i){
        var delta = b-a;
        if (delta < -p5.PI){
            b += p5.TWO_PI;
        }
        else if (delta > p5.PI){
            a += p5.TWO_PI;  
        }
        else if (delta == 0.0){
            return a;
        }
        return (1.0 - i) * a + i * b;
    }

    //=================================
    //All functions for making nodes
    function initNodes() {
        p5.createCanvas(1000, 500, p5.WEBGL);
        p5.angleMode(p5.DEGREES);
        InstantiateNodules();
        generateLinks();
        // p5.textFont(font);
        p5.textAlign(p5.CENTER);
    }

    function drawNodes() {
        gradient2();

        for (let i = 0; i < nodes; i++) {
            nodules[i].display();
            nodules[i].drift();
            nodules[i].sizeChange();
        }

        for (let i = 0; i < links.length; i++) {
            links[i].display();
        }
    }

    function gradient2() {
    let c1 = p5.color(0);
    let c2 = p5.color(42, 35, 86);
    let c3 = p5.color(255, 111, 255);

    let mid = p5.width / 2;

    for (let x = -mid; x < mid; x++) {
        let n;
        let newc;

        if (x < 0) {
        n = p5.map(x, -mid, 0, 0, 1);
        newc = p5.lerpColor(c3, c1, n);
        } else {
        n = p5.map(x, 0, mid, 0, 1);
        newc = p5.lerpColor(c1, c2, n);
        }

        p5.stroke(newc);
        p5.line(x, -p5.height / 2, x, p5.height / 2);
    }
    }

    function InstantiateNodules() {
    for (let i = 0; i < nodes; i++) {
        nodules.push(new Nodule(
        p5.random(-p5.width / 2, p5.width / 2),
        p5.random(-p5.height / 2, p5.height / 2),
        p5.random(8, 20)
        ));
    }
    }

    function generateLinks() {
    for (let i = 0; i < nodules.length; i++) {
        links.push(new Link());
    }
    }

    class Nodule {
    constructor(x, y, baseSize) {
        this.x = x;
        this.y = y;
        this.baseSize = baseSize;
        this.size = baseSize;
        this.radius = p5.random(-2.0, 2.5);
        this.direction = p5.random(-21, 21);

        // NEW: Randomized pulsation behavior
        this.pulsationOffset = p5.random(p5.TWO_PI);
        this.pulsationSpeed = p5.random(0.1, 1);
    }

    display() {
        // Fill for circle
        p5.fill(110, 203, 246);

        // Circle outline
        p5.stroke(110, 203, 246);
        p5.strokeWeight(1);
        p5.circle(this.x, this.y, this.size);

        // Text transparency based on size
        let alpha = p5.map(this.size, 5, 25, 80, 200);
        p5.fill(0, 0, 0, alpha);
        p5.noStroke();
        p5.textSize(this.size / 2);
        p5.text(word, this.x, this.y);
    }

    drift() {
        let vx = this.radius * p5.cos(this.direction);
        let vy = this.radius * p5.sin(this.direction);

        this.x += vx;
        this.y += vy;

        this.direction += 0.5;
    }

    sizeChange() {
        // NEW: smooth pulsation based on individual timing
        let t = p5.frameCount * this.pulsationSpeed + this.pulsationOffset;
        this.size = this.baseSize + p5.sin(t) * 20; // 3 is pulsation amplitude
    }
    }

    class Link {
    constructor() {
        this.node1 = p5.random(nodules);
        this.node2 = p5.random(nodules);
    }

    display() {
        p5.strokeWeight(2);
        p5.stroke(110, 203, 246);
        p5.line(this.node1.x, this.node1.y, this.node2.x, this.node2.y);
    }
    }

    p5.mousePressed = () => {
        console.log("click");
        switch(gameState) {
            case "home":
                initMorse()
                break;
            case "morse":
                // console.log("morse");
                initSoundByte()
                break;
            case "threedee":
                console.log("home");
                break;
            case "runner":
                console.log("runner");
                break;
            case "newstream":
                console.log("newstream");
                break;
            case "soundbyte":
                // console.log("soundbyte");
                // initSoundByte()
                break;
        }
    
    }
    //make some sort of onscreen ui button for navigating
    //
};