import React from 'react';
import {Link} from "react-router-dom";

const MyComponent = () => {
    return (
        <div className={"header flex mx-12"}>
            <Link to={"/"}>
                <img src={require("../assets/apple-touch-icon.png")} className={"w-20"} alt=""/>
            </Link>
            
            <ul className={"w-full flex space-x-8 justify-end items-center"}>
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
        </div>
    );
};

export default MyComponent;
