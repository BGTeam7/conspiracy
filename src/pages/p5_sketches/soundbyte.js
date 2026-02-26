//GLOBAL VARIABLES
var radioBase;
var tone, pitch, distort;
var dialogue;
var sound; // need to load this on setup

var radioBase;

let theta;
let targetAngle = 0.0;
let currentAngle = 0.0;
let smoothSpeed = 0.05;

function initSoundByte(p5) {
    p5.createCanvas(800, 450);
    p5.background(0);
    radioBase = new Radio();
    theta = p5.TWO_PI/3;
}

function drawSoundByte(p5) {
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