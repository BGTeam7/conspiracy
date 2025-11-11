import React from "react";
import { Link } from "react-router-dom";
import connector from "../assets/connector.svg"
import journal from "../assets/journal.png"
import file from "../assets/classified_folder.png"
import mingo from "../assets/mingo.png"
import logo from "../assets/logo.png"
import stackup from "../assets/stackup.png"
import extra from "../assets/extralife.svg"
import reach from "../assets/reach.png"
import { FaXbox, FaPlaystation } from "react-icons/fa6";
import { SiEpicgames } from "react-icons/si";
import DevTeam from "../data/dev";
import Card from "../components/card";
import pin from "../assets/pushpin-pink.png"
import circuit from "../assets/pin_circuit.svg"

const Home = () => {
    return(
        <>
        <section className="flex justify-center py-24">
            <img className="mix-blend-lighten w-full" src={logo}/>
        </section>
        <section>
            <div>
                <div className="flex flex-col sm:flex-row gap-8 justify-center my-10">
                    <button className="trispace self-center font-semibold text-2xl px-10 w-max">coming soon on</button>
                    <div className="flex justify-center gap-8">
                        <button><SiEpicgames size={36}/></button>
                        <button><FaXbox size={36}/></button>
                        <button><FaPlaystation size={36}/></button> 
                    </div>
                    
                </div>
                <hr className="border-2 border-[#6ECBF5] border-solid w-[200px] sm:w-[500px] absolute right-1/2 translate-x-1/2 -translate-y-20 -z-10"/>
            </div>
        </section>
        <div className="scanlines mx-8 lg:mx-40"> 
            <section className=" rounded-bl-2xl rounded-tr-2xl border-solid border-2 border-blue-300 bg-[rgba(57,119,252,0.15)]">
                <div className="uppercase text-right text-2xl md:text-5xl px-12 py-8 border-b-solid border-b-2 border-blue-300 gradient rounded-tr-2xl flex justify-between">
                    <div className="flex items-center">
                        <img src={pin} className="w-12 scale-[2.5] mix-blend-screen -scale-x-[2.5] -translate-y-12"/>
                        <img src={circuit} className="h-12 scale-[2] mix-blend-screen translate-y-6 -translate-x-3  -scale-x-[2]"/>
                    </div>
                    <h3 className="trispace font-medium ">explore familiar worlds</h3>
                </div>
                <div className="p-10">
                    <div className="flex flex-col sm:flex-row gap-10">
                        <div className="level_border">
                            <img className="scale-110 hover:scale-125 transition-transform" src={file}/>
                        </div>
                        <div className="level_border">
                            <img className="scale-110 hover:scale-125 transition-transform" src={file}/>
                        </div>
                        <div className="level_border">
                            <img className="scale-110 hover:scale-125 transition-transform" src={file}/>
                        </div>
                    </div>
                    <p className="text-lg md:text-2xl text-center mt-8">Help Mingo find her family and friends, who are trapped in the pixels of some of your favorite video game levels! Explore new frontiers in your favorite universes, and break the fourth wall as you learn more about the mystery taht ties them together - will Mingo rescue all of her loved ones? Does she figure out what's happening in the end? Can she beat the Rainbow Road level? Only one way to find out!</p>
                </div>
            </section>
        </div>
        
        <div className="flex justify-center">
            <img src={connector} className="mix-blend-overlay self-center"/>
        </div>
        <div className="scanlines mx-8 lg:mx-40">
            <section className="rounded-bl-2xl rounded-tr-2xl border-solid border-2 border-blue-300 bg-[rgba(57,119,252,0.15)]">
                <div className="uppercase text-right text-2xl md:text-5xl px-12 py-8 border-b-solid border-b-2 border-blue-300 gradient rounded-tr-2xl flex justify-between">
                    <h3 className="trispace text-left font-medium">mingo's story</h3>
                    <div className="flex items-center">
                        <img src={circuit} className="h-12 scale-[2] mix-blend-screen translate-y-6 translate-x-3"/>
                        <img src={pin} className="w-12 scale-[2.5] mix-blend-screen -translate-y-12"/>
                    </div>
                </div>
                <div className="p-10 space-y-10">
                    <div className="md:flex gap-4 p-4 border-solid border-2 text-left rounded-tr-3xl border-purple-300">
                        <img className="object-cover w-full" src={mingo}/>
                        <div className="space-y-4">
                            <div className="flex gap-4 items-center bg-[#e372d64e] p-5 rounded-tr-2xl">
                                <h1 className="uppercase opacity-100 trispace font-semibold text-3xl">mingo</h1>
                                <p className="text-base md:text-xl">Flamingo-Human Hybrid</p>
                            </div>
                            <div className="space-y-4">
                                <div className="flex gap-2 items-center">
                                    <progress id="heart" value="32" max="100"> 32% </progress>
                                    <label className="uppercase font-semibold" for="heart"> stat#1</label>
                                </div>
                                <div className="flex gap-2 items-center">
                                    <progress id="heart" value="32" max="100"> 32% </progress>
                                    <label className="uppercase font-semibold" for="heart"> stat#2</label>
                                </div>
                                <div className="flex gap-2 items-center">
                                    <progress id="heart" value="32" max="100"> 32% </progress>
                                    <label className="uppercase font-semibold" for="heart"> stat#3</label>
                                </div>
                            </div>
                            
                            <p className="text-base md:text-xl font-semibold">
                                More text here. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  tempor incididunt ut labore et dolore magna aliqua.
                            </p>
                        </div>
                    </div>
                    <div className="grid grid-cols-3">
                        <p className="col-span-2 self-center text-center text-lg md:text-2xl">To learn more about Mingo's story, click the journal icon over here! </p>
                        <img src={journal} className="w-full"/>
                    </div>
                </div>
            </section>

        </div>
        <div className="flex justify-center">
            <img src={connector} className="mix-blend-overlay self-center -scale-x-100"/>
        </div>
        <div className="scanlines mx-8 lg:mx-40">
            <section className="rounded-bl-2xl rounded-tr-2xl border-solid border-2 border-blue-300 bg-[rgba(57,119,252,0.15)]">
                <div className="uppercase text-right text-2xl md:text-5xl px-12 py-8 border-b-solid border-b-2 border-blue-300 gradient rounded-tr-2xl flex justify-between">
                    <div className="flex items-center">
                        <img src={pin} className="w-12 scale-[2.5] mix-blend-screen -scale-x-[2.5] -translate-y-12"/>
                        <img src={circuit} className="h-12 scale-[2] mix-blend-screen translate-y-6 -translate-x-3  -scale-x-[2]"/>
                    </div>
                    <h3 className="trispace font-medium text-right">featured dev team</h3>
                </div>
                <div className="p-10">
                    <div className="md:flex justify-around gap-4">
                        {DevTeam.map((e) => {
                            return (
                                <Card img={e.img} name={e.name}/>
                            )
                        })}
                    </div>
                </div>
            </section>
        </div>
        <div className="flex justify-center">
            <img src={connector} className="mix-blend-overlay self-center"/>
        </div>
        <div className="scanlines mx-8 lg:mx-40">
            <section className="rounded-bl-2xl rounded-tr-2xl border-solid border-2 border-blue-300 bg-[rgba(57,119,252,0.15)]">
                <div className="uppercase text-right text-2xl md:text-5xl px-12 py-8 border-b-solid border-b-2 border-blue-300 gradient rounded-tr-2xl flex justify-between">
                    <h3 className="trispace text-left font-medium">our partners</h3>
                    <div className="flex items-center">
                        <img src={circuit} className="h-12 scale-[2] mix-blend-screen translate-y-6 translate-x-3"/>
                        <img src={pin} className="w-12 scale-[2.5] mix-blend-screen -translate-y-12"/>
                    </div>
                </div>
                <div className="p-10 text-2xl space-y-10 text-center">
                    <p>Description text for this section can go here. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                    <div className="md:flex gap-10">
                        <div className="char_border">
                            <div className="bg-blue-400 bg-opacity-25 justify-center flex">
                                <img className="p-4 hover:scale-110 h-32 transition-transform object-contain object-center" src={extra}/>
                            </div>
                        </div>
                        <div className="char_border">
                            <div className="bg-blue-400 bg-opacity-25 justify-center flex">
                                <img className=" p-4 hover:scale-110 h-32 transition-transform object-contain object-center" src={stackup}/>
                            </div>
                        </div>
                        <div className="char_border">
                            <div className="bg-blue-400 bg-opacity-25 justify-center flex">
                                <img className="p-4 hover:scale-110 h-32 transition-transform object-contain object-center" src={reach}/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center gap-10 translate-y-[50%]">
                    <a href="https://www.paypal.com/donate/?hosted_button_id=RUGEY8J38GKU4">
                        <button className="trispace font-semibold text-sm md:text-2xl px-10">donate</button>
                    </a>
                    <a href="https://boundlessgamers.org/">
                        <button className="trispace font-semibold text-sm md:text-2xl px-10">boundless gamers</button>
                    </a>
                </div>
            </section>
        </div>

        </>
    );
};
export default Home;