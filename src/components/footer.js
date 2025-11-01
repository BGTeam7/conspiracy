import { Link } from "react-router-dom";
import { FaDiscord, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
    return(
        <footer className="grid grid-cols-4 bg-[#111] text-gray-400 p-24 pt-14 mt-14">
            <div>
                <div>logo stuff</div>
                <div className="flex gap-2 text-[#E372D6]">
                    <a href="https://www.paypal.com/donate/?hosted_button_id=RUGEY8J38GKU4"><FaXTwitter/></a>
                    <a href="https://pixelgamesstudio.org/"><FaInstagram/></a>
                    <a href="https://boundlessgamers.org/"><FaDiscord/></a>
                </div>
            </div>
            <div className="flex flex-col justify-start text-left">
                <a href="https://www.paypal.com/donate/?hosted_button_id=RUGEY8J38GKU4">Contact Us</a>
                <a href="https://pixelgamesstudio.org/">Privacy Policy</a>
                <a href="https://boundlessgamers.org/">Terms of Use</a>
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