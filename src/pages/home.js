import React from "react";
import { Link } from "react-router-dom";
import connector from "../assets/connector.svg"
import journal from "../assets/journal.png"
import file from "../assets/classified_folder.png"
import mingo from "../assets/mingo.png"
import logo from "../assets/logo.png"

const Home = () => {
    return(
        <>
        <section className="flex justify-center p-24">
            <img className="mix-blend-lighten w-full" src={logo}/>
        </section>
        <section>
            <div className="flex gap-8 justify-center">
                {/* We want to make these images bigger once we have all the images put together! */}
                <button>coming soon on</button>
                <button>epic</button>
                <button>xbox</button>
                <button>ps</button>
            </div>
        </section>
        <section className="mx-8 md:mx-40 rounded-bl-2xl rounded-tr-2xl border-solid border-2 border-blue-300 bg-[rgba(57,119,252,0.15)]">
            <h1 className="uppercase text-right text-5xl px-6 py-4 border-b-solid border-b-2 border-blue-300 gradient rounded-tr-2xl">
                explore familiar worlds
            </h1>
            <div className="p-10">
                <div className="flex gap-10">
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
                <p className="text-2xl text-center mt-8">Help Mingo find her family and friends, who are trapped in the pixels of some of your favorite video game levels! Explore new frontiers in your favorite universes, and break the fourth wall as you learn more about the mystery taht ties them together - will Mingo rescue all of her loved ones? Does she figure out what's happening in the end? Can she beat the Rainbow Road level? Only one way to find out!</p>
            </div>
        </section>
        <div className="flex justify-center">
            <img src={connector} className="mix-blend-overlay self-center"/>
        </div>
        <section className="mx-8 md:mx-40 rounded-bl-2xl rounded-tr-2xl border-solid border-2 border-blue-300 bg-[rgba(57,119,252,0.15)]">
            <h1 className="uppercase text-left text-5xl px-6 py-4 border-b-solid border-b-2 border-blue-300 gradient rounded-tr-2xl">
                discover mingo's story
            </h1>
            <div className="p-10 space-y-10">
                <div className="flex gap-4 p-4 border-solid border-2 text-left border-purple-300">
                    <div className="w-full">
                        <img className="h-full w-auto" src={mingo}/>
                    </div>
                    <div className="space-y-4">
                        <div className="flex bg-[#e372d64e] p-5 rounded-tr-2xl">
                            <h1 className="uppercase text-lg opacity-100">mingo</h1>
                            <p>Flamingo-Human Hybrid</p>
                        </div>
                        <div>
                            <progress id="heart" value="32" max="100"> 32% </progress>
                            <label for="heart"> stat 1</label>
                            <br/>
                            <progress id="heart" value="32" max="100"> 32% </progress>
                            <label for="heart"> stat2</label>
                            <br/>
                            <progress id="heart" value="32" max="100"> 32% </progress>
                            <label for="heart"> stat 3</label>
                            <br/>
                        </div>
                        
                        <p className="text-xl font-semibold">
                            More text here. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                    </div>
                </div>
                <div className="flex">
                    <p className="w-3/4 text-center text-2xl">To learn more about Mingo's story, click the journal icon over here! </p>
                    <img src={journal} className="w-full"/>
                </div>
            </div>
        </section>
        <div className="flex justify-center">
            <img src={connector} className="mix-blend-overlay self-center -scale-x-100"/>
        </div>
        <section className="mx-8 md:mx-40 rounded-bl-2xl rounded-tr-2xl border-solid border-2 border-blue-300 bg-[rgba(57,119,252,0.15)]">
            <h1 className="uppercase text-right text-5xl px-6 py-4 border-b-solid border-b-2 border-blue-300 gradient rounded-tr-2xl">
                featured dev team
            </h1>
            <div className="p-10">
                <div className="flex">
                    <div>one</div>
                    <div>one</div>
                    <div>one</div>
                </div>
            </div>
        </section>
        <div className="flex justify-center">
            <img src={connector} className="mix-blend-overlay self-center"/>
        </div>
        <section className="mx-8 md:mx-40 rounded-bl-2xl rounded-tr-2xl border-solid border-2 border-blue-300 bg-[rgba(57,119,252,0.15)]">
            <h1 className="uppercase text-left text-5xl px-6 py-4 border-b-solid border-b-2 border-blue-300 gradient rounded-tr-2xl">
                our partners
            </h1>
            <div className="p-10 text-2xl">
                <p>Description text for this section can go here. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                <div className="flex gap-10">
                    <div className="char_border">
                        <img className="scale-110 hover:scale-125 transition-transform" src={file}/>
                    </div>
                    <div className="char_border">
                        <img className="scale-110 hover:scale-125 transition-transform" src={file}/>
                    </div>
                    <div className="char_border">
                        <img className="scale-110 hover:scale-125 transition-transform" src={file}/>
                    </div>
                </div>
            </div>
        </section>

        </>
    );
};
export default Home;