import ComputerSoundByte from './computer_soundbyte_sketch';
import { P5Canvas } from "@p5-wrapper/react";

const Minigame = () => {
    return(
        <div className="flex py-10">
            <div className='flex-grow'></div>
            <P5Canvas className="justify-center place-self-center" sketch={ComputerSoundByte}/>
            <div className='flex-grow'></div>
        </div>
        
    );
};

export default Minigame;