import React from 'react';
import { Link } from "react-router-dom";
import screenshotstudlapfigma from "../assets/screenshot-studlap-figma.jpg"
import screenshotfigmasafecar1 from "../assets/screenshot-figma-safecar-1.png"

const AboutComponent = () => {
    return (
        <div className={"w-full my-12 flex items-center justify-center flex-wrap h-full lg:px-0 px-12"}>
            <div className={"items-center m-auto p-[1rem] max-w-[340px] text-center"}>
                <h1 className={"font-bold text-2xl"}>Qui je suis ?</h1>
                <p className={"my-6"}>Je suis un développeur web</p>
                <Link to={"/react-portfolio/contact"}>
                    <button className={"uppercase bg-orange-400 hover:bg-[#e28336] py-2 px-10 text-black text-lg border border-white"}>Contact</button>
                </Link>
            </div>

            <div className={"max-w-[700px] lg:mt-8 mt-8"}>
                <div className={"grid grid-col-custom-12 relative items-center text-center"}>
                    <div className={"col-[1_/_span_8] grid-row-custom-1 pt-1/5 z-[6]"}>
                        <img src={screenshotstudlapfigma} alt="" className={"max-w-[90%] border border-[#333]"}/>
                    </div>
                    <div className={"col-[4_/_-1] grid-row-custom-1 z-[5]"}>
                        <img src={screenshotfigmasafecar1} alt="" className={"max-w-[90%] border border-[#333]"}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutComponent;
