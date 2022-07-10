import React from 'react';
import HeaderImg from "../assets/hero-bg.jpg";
import {Link} from "react-router-dom";

const HeroImg = () => {
    return (
        <div className={"h-[90vh] w-full text-center"}>
            <div className={"w-full h-full relative after:w-full after:h-full after:absolute after:top-0 after:left-0 after:bg-black/50 "}>
                <img src={HeaderImg} alt="" className={"w-full h-full bg-cover bg-center object-cover"} />
            </div>
            <div className={"absolute -translate-y-2/3 -translate-x-1/2 top-1/2 left-1/2 items-center space-y-6"}>
                <p className={"uppercase text-xl font-light"}>Quentin Dimanche</p>
                <h1 className={"text-6xl font-bold"}>Développeur Web</h1>
                <div className={"space-x-12 flex justify-center"}>
                    <Link to="/react-portfolio/project"><div className={"uppercase bg-orange-400 hover:bg-[#e28336] py-2 px-10 text-black text-lg border border-white"}>Projets</div></Link>
                    <Link to="/react-portfolio/contact"><div className={"uppercase bg-transparent py-2 px-10 text-white text-lg border border-white"}>Contact</div></Link>
                </div>
            </div>
        </div>
    );
};

export default HeroImg;
