import React, {useState} from 'react';
import {Link} from "react-router-dom";
import {FaBars, FaTimes} from "react-icons/fa";

const MyComponent = () => {

    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

    const [color, setColor] = useState(false);
    const changeColor = () => {
        if (window.scrollY >=100 ) {
            setColor(true);
        }else {
            setColor(false);
        }
    }

    window.addEventListener("scroll", changeColor);


    return (
        <div className={color ? "flex px-6 lg:py-6 py-10  lg:h-fit items-center fixed w-full h-[90px] z-10 bg-black/90 transition-all duration-500" : "flex px-6 lg:py-6 py-10  lg:h-fit items-center fixed w-full h-[90px] z-10 bg-transparent" }>
            <Link to={"/"}>
                <img src={require("../assets/apple-touch-icon.png")} className={"w-20"} alt=""/>
            </Link>
            
            <ul className={click ?"w-full flex lg:flex-row flex-col  lg:space-x-8 lg:space-y-0 space-y-8 items-center  lg:justify-end justify-center lg:text-xl text-3xl font-bold lg:bg-transparent lg:bg-transparent bg-black/90 text-white lg:static absolute top-0 left-0 lg:h-fit h-screen " : "w-full flex lg:flex-row flex-col  lg:space-x-8 lg:space-y-0 space-y-8 items-center lg:justify-end justify-center lg:text-xl text-3xl font-bold lg:bg-transparent lg:bg-transparent bg-black/90 text-white lg:static absolute top-0 -left-full lg:h-fit h-screen -z-3 transition-all duration-500"}>
                <li>
                    <Link to={"/"}>Accueil</Link>
                </li>
                <li>
                    <Link to={"/about"}>À propos</Link>
                </li>
                <li>
                    <Link to={"/project"}>Projets</Link>
                </li>
                <li>
                    <Link to={"/contact"}>Contact</Link>
                </li>

            </ul>

            <div className={"hamburger block lg:hidden  w-full flex justify-end relative z-3"} onClick={handleClick}>
                {click ? (<FaTimes size={25} style={{color:'#fff'}}/>) : <FaBars size={25} style={{color:'#fff'}}/> }
            </div>
        </div>
    );
};

export default MyComponent;
