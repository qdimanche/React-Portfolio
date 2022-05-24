import React from 'react';
import WorkCard from "./WorkCard";
import WorkCardData from "./WorkCardData";



const Work = () => {
    return (
        <div className={"lg:py-16 py-12"}>
            <h1 className={"text-center pt-4 pb-12 text-2xl font-bold    "}>Projets</h1>
            <div className={"container lg:mx-auto m-auto max-w-[90%] grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-[40px]"}>
                {WorkCardData.map((val, ind)=>{
                    return(
                        <WorkCard
                        key={ind}
                        imgsrc={val.imgsrc}
                        title={val.title}
                        text={val.text}
                        view={val.view}
                        source={val.source}

                        />
                    )
                })}
            </div>
        </div>
    );
};

export default Work;
