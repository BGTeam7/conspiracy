let gameState = "home"


export default function SceneManager(p5) {
    p5.setup = () => {
    p5.createCanvas(800, 450);
    p5.background(255);
    // initNodes()
    
    };

    // This function runs once every frame, and can be used to detect if a certain thing happens once a frame
    p5.draw = () => {
        switch(gameState) {
            case "home":
                // console.log("home");
                // drawNodes()
                drawHome()
                break;
            case "morse":
                console.log("morse");
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
                console.log("soundbyte");
                break;
        }
        //if game state = soundbyte then loop soundbyte draw function
        //or do a switch statement idk

    };

    function drawHome() {
        p5.background("red");
        p5.text("this is home", 50, 50)
    }

    function initHome() {
        //
        p5.background("red");
    }

    p5.mousePressed = () => {
        console.log("click");
    }
    

    //make some sort of onscreen ui button for navigating
    //
};