import React from 'react';
import { NavLink } from 'react-router-dom'


const WorkCard = (props) => {
    return (
        <div className={"bg-[#1A1919] p-4"}>
            <img src={props.imgsrc} alt="" className={"w-full"}/>
            <h2 className={"font-bold text-xl mt-4"}>{props.title}</h2>
            <div>
                <p className={"mt-2 mb-8"}>
                    {props.text}
                </p>
                <div className={"flex justify-between"}>
                    <NavLink to={props.view} className={"uppercase bg-orange-400 hover:bg-[#e28336] py-2 px-10 text-black text-sm border border-white"}>Voir</NavLink>
                    <NavLink to={props.source} className={"uppercase bg-orange-400 hover:bg-[#e28336] py-2 px-10 text-black text-sm border border-white"}>Source</NavLink>
                </div>
            </div>
        </div>
    );
};

export default WorkCard;
