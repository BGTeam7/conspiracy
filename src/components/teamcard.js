import {useState, useRef} from "react";
import logo from "../logo.svg"
import Paint from "../assets/paint.svg";
import Pen from "../assets/pen.svg";
import ui_ux from "../assets/ui_ux.svg";
import { FaX, FaGithub, FaSuitcase, FaLinkedin, FaBook } from "react-icons/fa6";


function TeamCard(props) {

    //Using useToggle Hook
    

    const useToggle = (initialState) => {
    const [toggleValue, setToggleValue] = useState(initialState);
    const toggler = () => { setToggleValue(!toggleValue) };
    return [toggleValue, toggler]
    };
    const [toggle, setToggle] = useToggle();

    console.log(props.img + "&sz=w1000")
    var img_link = props.img + "&sz=w1000"

    function Links() {
        return(
            <div className="flex gap-4 justify-center">
                {props.portfolio !== "" && (
                    <a href={props.portfolio}>
                        <FaBook size={24} className="hover:text-blue-300"/>
                    </a>
                )}
                {props.github !== "" && (
                    <a href={props.linkedin}>
                    <FaGithub size={24} className="hover:text-blue-300"/>
                    </a>
                )}
                {props.linkedin !== "" && (
                    <a href={props.linkedin}>
                        <FaLinkedin size={24} className="hover:text-blue-300"/>
                    </a>
                )}
            </div>
        );
    }

    function Skills() {
        //each curly bracket corresponds to a specific team and that team icon only renders when the if statement is fulfilled
        return(
            <div className="text-base">
                {props.role.includes("Production") && (
                    <div className="flex gap-4">
                        <img src={Paint} className="w-4"/> 
                        <span>Production</span> 
                    </div>
                )}
                {props.role.includes("Development") && (
                    <div className="flex gap-4">
                        <img src={Paint} className="w-4"/> 
                        <span>Development</span> 
                    </div>
                )}
                {props.role.includes("Art") && (
                    <div className="flex gap-4">
                        <img src={Paint} className="w-4"/> 
                        <span>Development</span> 
                    </div>
                )}
                {props.role.includes("Web Design") && (
                    <div className="flex gap-4">
                        <img src={Paint} className="w-4"/> 
                        <span>Development</span> 
                    </div>
                )}
                {props.role.includes("Audio") && (
                    <div className="flex gap-4">
                        <img src={Paint} className="w-4"/> 
                        <span>Development</span> 
                    </div>
                )}
                {props.role.includes("Writing") && (
                    <div className="flex gap-4">
                        <img src={Paint} className="w-4"/> 
                        <span>Development</span> 
                    </div>
                )}
                {props.role.includes("IT") && (
                    <div className="flex gap-4">
                        <img src={Paint} className="w-4"/> 
                        <span>Development</span> 
                    </div>
                )}
                {props.role.includes("Production Support") && (
                    <div className="flex gap-4">
                        <img src={Paint} className="w-4"/> 
                        <span>Production Support</span> 
                    </div>
                )}
            </div>
        );
    }

    return (
        <div>
            <div className="char_border w-56 sm:w-64 h-56 sm:h-64 flex flex-col" onClick={setToggle}>
                <img referrerPolicy="no-referrer" className="w-full h-full object-cover rounded-tr-xl" loading="lazy" src={img_link}/>
                <p className="uppercase trispace text-sm lg:text-lg text-center p-2 rounded-bl-xl bg-blue-400 bg-opacity-25 mt-2">{props.name}</p>
            </div>
            {toggle &&(
                <div>
                    <div id="overlay" onClick={setToggle}></div>
                    {/* for the animation in the card expansion, look at expanded card and its connected keyframe animation in App.css. I also added an overflow-hidden class to the whole thing to hide the extra content during the animation */}
                    <div className="scanlines expanded-card w-96 backdrop-blur-lg border-solid bg-blue-950 bg-opacity-30 border-2 border-blue-400 rounded-tr-2xl overflow-hidden">
                        <div className="flex justify-between items-center p-4 border-b-solid border-b-2 border-blue-400 gradient rounded-tr-xl">
                            <p className="uppercase">{props.name} 
                                <span className="lowercase text-sm"> ({props.pronouns})</span>
                            </p>
                            <FaX onClick={setToggle} className="hover:cursor-pointer"/>
                        </div>
                        <div className="flex flex-col text-base gap-4 p-8">
                            <img referrerPolicy="no-referrer" loading="lazy" src={img_link} className="aspect-square rounded-tr-2xl rounded-bl-2xl w-full h-auto object-cover border-solid border-blue-300 border-2"/>
                            <div>
                                <Skills/>
                            </div>
                            <div className="space-y-4">
                                <div>
                                    <p className="uppercase text-lg">favorite video game:</p>
                                    <p>{props.game}</p>
                                </div>
                                <div>
                                    <p className="uppercase text-lg">fun fact:</p>
                                    <p>{props.fact}</p>
                                </div>
                                <div>
                                    <p className="uppercase text-lg">inventory:</p>
                                    <p>{props.inventory}</p>
                                </div>
                            </div>
                            <Links/>
                        </div>
                        {/* <img src={props.img} className="aspect-square w-full md:w-1/3 h-auto object-cover pinkframe border-pink-300 border-2"/> */}
                        
                        
                    </div>
                </div>
            )}
        </div>
        
    )
}

export default TeamCard;