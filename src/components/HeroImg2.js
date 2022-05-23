import React, {Component} from 'react';


class HeroImg2 extends Component  {
    render(){
        return (
            <div className={"w-full h-[60vh] relative before:content-[''] before:bg-cover before:bg-center bg-macbook before:h-full before:w-full before:absolute relative before:top-0 before:left-0 before:-z-1"}>
                <div className={`w-full h-full flex flex-col justify-center items-center absolute bg-black/20`} >
                    <h1 className={"lg-text-4xl text-3xl font-bold mb-3"}>{this.props.heading}</h1>
                    <p className={"text-xl font-light"}>{this.props.text}</p>
                </div>
            </div>
        );
    }
};

export default HeroImg2;
