import {useState, useRef} from "react";
import logo from "../logo.svg"
import { FaX, FaGithub, FaSuitcase, FaLinkedin } from "react-icons/fa6";


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

    function Github() {
        if (props.github !== "") {
            return <a href={props.github}><FaGithub/></a>
        }
    }

    function Portfolio() {
        if (props.portfolio !== "") {
            return <a href={props.portfolio}><FaSuitcase/></a>
        }
    }

    function Linkedin() {
        if (props.linkedin !== "") {
            return <a href={props.linkedin}><FaLinkedin/></a>
        }
    }

    return (
        <div>
            <div className="char_border w-52 sm:w-64" onClick={setToggle}>
                <img referrerPolicy="no-referrer" className="w-full aspect-[5/4] object-cover" loading="lazy" src={img_link}/>
                <p className="uppercase trispace text-sm lg:text-lg text-center p-2 rounded-bl-2xl bg-blue-400 bg-opacity-25 mt-1">{props.name}</p>
            </div>
            {toggle &&(
                <div>
                    <div id="overlay" onClick={setToggle}></div>
                    <div className="expanded-card backdrop-blur-xl border-solid border-2 border-blue-400 rounded-tr-2xl">
                        <div className="flex justify-between items-center p-4 border-b-solid border-b-2 border-blue-400 gradient rounded-tr-2xl">
                            <p className="uppercase">{props.name} 
                                <span className="lowercase text-sm"> ({props.pronouns})</span>
                            </p>
                            <FaX onClick={setToggle} className="hover:cursor-pointer"/>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-10 p-8">
                            <img referrerPolicy="no-referrer" loading="lazy" src={img_link} className="aspect-square sm:aspect-[3/4] rounded-tr-2xl rounded-bl-2xl w-full md:w-1/3 h-auto object-cover border-solid border-blue-300 border-2"/>
                            <div>
                                <div className="space-y-4">
                                    <Github/>
                                    <Linkedin/>
                                    <Portfolio/>
                                </div>
                                <div className="grid">
                                    <p className="rounded-tr-lg bg-blue-500 uppercase col-span-2 px-10 text-center">inventory</p>
                                    <p>test</p>
                                    <p>test</p>
                                </div>
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
                                
                            </div>
                        </div>
                        {/* <img src={props.img} className="aspect-square w-full md:w-1/3 h-auto object-cover pinkframe border-pink-300 border-2"/> */}
                        
                        
                    </div>
                </div>
            )}
        </div>
        
    )
}

export default TeamCard;