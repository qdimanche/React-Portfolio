import React, {useState} from 'react';
import {Link} from "react-router-dom";
import {FaBars, FaTimes} from "react-icons/fa";

const MyComponent = () => {

    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);


    return (
        <div className={"flex lg:mx-20 mx-10 lg:py-6 py-10  lg:h-fit items-center"}>
            <Link to={"/"}>
                <img src={require("../assets/apple-touch-icon.png")} className={"w-20"} alt=""/>
            </Link>
            
            <ul className={click ?"w-full flex lg:flex-row flex-col  lg:space-x-8 lg:space-y-0 space-y-8 items-center  lg:justify-end justify-center lg:text-xl text-3xl font-bold lg:bg-transparent lg:bg-black bg-black/90 text-white lg:static absolute top-0 left-0 lg:h-fit h-screen " : "w-full flex lg:flex-row flex-col  lg:space-x-8 lg:space-y-0 space-y-8 items-center lg:justify-end justify-center lg:text-xl text-3xl font-bold lg:bg-transparent lg:bg-black bg-black/90 text-white lg:static absolute top-0 -left-full lg:h-fit h-screen -z-3 transition-all duration-500"}>
                <li>
                    <Link to={"/"}>Home</Link>
                </li>
                <li>
                    <Link to={"/about"}>About</Link>
                </li>
                <li>
                    <Link to={"/project"}>Projects</Link>
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
