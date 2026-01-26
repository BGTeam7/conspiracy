
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

export default function ComputerSoundByte() {

// A function that runs once at the beginning of the game 
  function setup() {
    createCanvas(500, 500);
    background(0);
    radioBase = new Radio();
    theta = TWO_PI/3;
    
  }

  // This function runs once every frame, and can be used to detect if a certain thing happens once a frame
  function draw() {
    radioBase.rotateTone(300,225);
    radioBase.rotateDistortion(250,225);
    radioBase.rotatePitch(200,225);
  }

  /* Below is a simple skeleton for this, but we don't have to use it this way if we don't want to. This is meant to be customized based on use case and code style!*/

  // This function loads the sound that will be modified here as a .wav file. 
  function loadNewSound(){
    
  }

  // The sound will be modified here based on the value of the .wav and the  value of the tone, pitch and distort values. 
  function modifySound(){
    sound.tone = tone;
    sound.pitch = pitch;
    sound.distort = distort;
    
  }

  //This function draws the radio element. 
  class Radio {
    // the constructor draws an initial radio
    constructor(){
      this.base = rect(100,200, 300, 150);
    
      this.tone(300,225);
      this.distort(250,225);
      this.pitch(200,225);   
    
    }
    tone(x,y){
      stroke(color(0, 0, 0));//color of shape
      this.tone = circle(x, y, 40) ;
      stroke(color(0, 255, 0));//color of direction line
      this.toneLine = line(x, 210, x, 240);
    }
    distort(x,y){
      stroke(color(0, 0, 0));//color of shape
      this.distort = circle(x, y, 40);
      stroke(color(0, 255, 0));//color of direction line
      this.distortLine = line(x, 210, x, 240);
    }
    pitch(x,y){
      stroke(color(0, 0, 0));//color of shape
      this.pitch = circle(x, y, 40);
      stroke(color(0, 255,0));//color of direction line
      this.pitchLine = line(x, 210, x, 240);
    }
    rotateTone(x,y){
      //Found this resource - https://editor.p5js.org/lliu29/sketches/NeGyR6QJ, hopefully this will be helpful as a ref!
      targetAngle = atan2(mouseY - y, mouseX - x);
    currentAngle = lerpAngle(currentAngle, targetAngle, smoothSpeed);
      // Used this as a ref - https://p5js.org/reference/p5/if/
      if (mouseIsPressed && (mouseX < (x+20) && mouseX > (x-20) && mouseY < (y+20) && mouseY > (y-20))){
      
        stroke(color(0, 0, 0));//color of shape
        this.tone = circle(x, y, 40) ;

        stroke(color(255, 0, 0)); //direction facing the mouse
        this.toneLineCursor = line(x,y,x+cos(targetAngle) * 20.0, y + sin(targetAngle) * 20.0);

        stroke(color(0, 0, 0));//direction where it left off
        this.toneLine = line(x, y, x + cos(currentAngle) * 20.0, y + sin(currentAngle) * 20.0);

      // noStroke();
      }
    }
    // -- USING THIS TO TEST CLICK FUNCTIONALITY--!!
    rotatePitch(x,y){
      //Found this resource - https://editor.p5js.org/lliu29/sketches/NeGyR6QJ, hopefully this will be helpful as a ref!
      targetAngle = atan2(mouseY - y, mouseX - x);
    currentAngle = lerpAngle(currentAngle, targetAngle, smoothSpeed);
      
      // Used this as a ref - https://p5js.org/reference/p5/if/
      if (mouseIsPressed && (mouseX < (x+20) && mouseX > (x-20) && mouseY < (y+20) && mouseY > (y-20))){
          stroke(color(0, 0, 0));//color of shape
          this.pitch = circle(x, y, 40) ;

          stroke(color(255, 0, 0)); //direction facing the mouse
          this.pitchLineCursor = line(x,y,x+cos(targetAngle) * 20.0, y + sin(targetAngle) * 20.0);

          stroke(color(0, 255, 0));//direction where it left off
          this.pitchLine = line(x, y, x + cos(currentAngle) * 20.0, y + sin(currentAngle) * 20.0);

          // noStroke();
      
      }    
    }
    rotateDistortion(x,y){
      //Found this resource - https://editor.p5js.org/lliu29/sketches/NeGyR6QJ, hopefully this will be helpful as a ref!
      targetAngle = atan2(mouseY - y, mouseX - x);
    currentAngle = lerpAngle(currentAngle, targetAngle, smoothSpeed);
      // Used this as a ref - https://p5js.org/reference/p5/if/
      if (mouseIsPressed && (mouseX < (x+20) && mouseX > (x-20) && mouseY < (y+20) && mouseY > (y-20))){
      
        stroke(color(0, 0, 0));//color of shape
        this.distortion = circle(x, y, 40) ;

        stroke(color(255, 0, 0)); //direction facing the mouse
        this.distortionLineCursor = line(x,y,x+cos(targetAngle) * 20.0, y + sin(targetAngle) * 20.0);

        stroke(color(0, 0, 255));//direction where it left off
        this.distortionLine = line(x, y, x + cos(currentAngle) * 20.0, y + sin(currentAngle) * 20.0);

        // noStroke();
      }
    }
  }
  function lerpAngle(a,b,i){
    var delta = b-a;
    if (delta < -PI){
      b += TWO_PI;
    }
    else if (delta > PI){
      a += TWO_PI;  
    }
    else if (delta == 0.0){
      return a;
    }
    return (1.0 - i) * a + i * b;
  }
}