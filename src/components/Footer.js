import React from 'react';
import {FaFacebook, FaHome, FaLinkedin, FaMailBulk, FaPhone} from "react-icons/fa";

const MyComponent = () => {
    return (
        <div className={"container mx-auto lg:py-12 py-16 lg:px-0 px-12 flex lg:flex-row flex-col lg:space-x-12 space-x-0 lg:space-y-0 space-y-8 lg:grid lg:grid-cols-2 gap-[40px]"}>
            <div className={"flex flex-col space-y-4"}>
                <div className={"flex"}>
                    <FaHome size={"20"} style={{color:"white", marginRight: "2em"}}/>
                    <div>
                        <p>47 rue Claude Lorrain</p>
                        <p>Roubaix</p>
                    </div>
                </div>
                <div className={"flex"}>
                    <FaPhone size={"20"} style={{color:"white", marginRight: "2em"}}/>
                    <a href="tel:+33782282277">07 82 28 22 77</a>

                </div>
                <div className={"flex"}>
                    <FaMailBulk size={"20"} style={{color:"white", marginRight: "2em"}}/>
                    <a href="mailto:qdimanche@gmail.com">qdimanche@gmail.com</a>

                </div>
            </div>

            <div className={"lg:w-2/3 w-3/4"}>
                <h4 className={"font-bold "}>À propos de moi</h4>
                <p className={"my-6"}>
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
                </p>
                <div className={"flex"}>
                    <FaFacebook size={"30"} style={{color:"white", marginRight: "2em"}}/>
                    <FaLinkedin size={"30"} style={{color:"white", marginRight: "2em"}}/>
                </div>

            </div>
        </div>
    );
};

export default MyComponent;
