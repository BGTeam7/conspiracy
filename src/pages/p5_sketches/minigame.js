import ComputerSoundByte from './computer_soundbyte_sketch';
import { P5Canvas } from "@p5-wrapper/react";

const Minigame = () => {
    return(
        <P5Canvas sketch={ComputerSoundByte}/>
    );
};

export default Minigame;