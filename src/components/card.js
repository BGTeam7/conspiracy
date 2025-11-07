import link from "../assets/link.png"

export default function Card(props) {
    return(
        <a className="char_border p-1 pb-0">
            <img src={props.img}/>
            <p className="uppercase trispace text-lg text-center p-2 rounded-bl-2xl bg-blue-400 bg-opacity-25 mt-1">{props.name}</p>
        </a>
    );
}