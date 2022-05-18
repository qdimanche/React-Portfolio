import React from 'react';
import HeaderImg from "../assets/hero-bg.jpg";
import {Link} from "react-router-dom";

const HeroImg = () => {
    return (
        <div className={"h-full w-full"}>
            <div className={"w-full h-full relative after:w-full after:h-full after:absolute after:top-0 after:left-0 after:bg-black/50 "}>
                <img src={HeaderImg} alt="" className={"w-full h-full bg-cover bg-center object-cover"} alt="HeaderImg"/>
            </div>
            <div className={"absolute -translate-y-1/2 -translate-x-1/2 top-1/2 left-1/2 items-center space-y-6"}>
                <p className={"uppercase font-light"}>Quentin Dimanche</p>
                <h1 className={"text-3xl font-bold"}>Développeur Web</h1>
                <div>
                    <Link to="/project" classname={"uppercase"}>Projects</Link>
                    <Link to="/contact" classname={"uppercase"}>Contact</Link>
                </div>
            </div>
        </div>
    );
};

export default HeroImg;
