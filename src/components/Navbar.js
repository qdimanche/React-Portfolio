import React from 'react';
import {Link} from "react-router-dom";
import {FaBars} from "react-icons/fa";

const MyComponent = () => {
    return (
        <div className={"header flex lg:mx-20 mx-10 lg:pt-0 pt-10  lg:h-fit h-screen"}>
            <Link to={"/"}>
                <img src={require("../assets/apple-touch-icon.png")} className={"w-20 lg:block hidden"} alt=""/>
            </Link>
            
            <ul className={"w-full flex lg:flex-row flex-col  lg:space-x-8 lg:space-y-0 space-y-8 items-center  lg:justify-end justify-center lg:text-xl text-3xl font-bold lg:bg-transparent lg:bg-black bg-black/90 text-white "}>
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

            <div className={"hamburger"}>
                <FaBars size={25} style={{color:'#fff'}}/>
            </div>
        </div>
    );
};

export default MyComponent;
