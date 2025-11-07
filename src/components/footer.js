import { Link } from "react-router-dom";
import { FaDiscord, FaInstagram, FaTwitch, FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import logo_mini from "../assets/logo_mini.svg"

const Footer = () => {
    return(
        <footer className="grid grid-cols-4 bg-[#111] text-gray-400 p-24 pt-14 mt-14">
            <div className="space-y-4 w-min">
                <img src={logo_mini}/>
                <div className="flex gap-4 text-[#E372D6]">
                    <a href="https://www.twitch.tv/boundlessgamers"><FaTwitch size={24}/></a>
                    <a href="https://discord.gg/fFaGCTHfj2"><FaDiscord size={24}/></a>
                    <a href="https://www.instagram.com/boundlessgamers/"><FaInstagram size={24}/></a>
                    <a href="https://twitter.com/BoundIessGamers"><FaXTwitter size={24}/></a>
                    <a href="https://www.facebook.com/BoundlessGamers?mibextid=LQQJ4d"><FaFacebook size={24}/></a>
                        
                </div>
            </div>
            <div className="flex flex-col justify-start text-left">
                <a href="mailto:admin@boundlessgamers.org">Contact Us</a>
                <a href="https://pixelgamesstudio.org/">Privacy Policy</a>
                <a href="/termsofuse">Terms of Use</a>
            </div>
            <div className="flex flex-col justify-start text-left">
                <a href="https://www.paypal.com/donate/?hosted_button_id=RUGEY8J38GKU4">Donate</a>
                <a href="https://pixelgamesstudio.org/">Pixel Games Studio</a>
                <a href="https://boundlessgamers.org/">Boundless Gamers</a>
            </div>
        </footer>
    );
};

export default Footer;