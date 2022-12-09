import React from "react";
import "./Hero.css";



const Hero = ({imageSrc}) =>{
    return <div className="hero">
        <video src="https://assets.mixkit.co/videos/preview/mixkit-workers-moving-containers-from-a-cargo-ship-4450-large.mp4" autoPlay loop muted 
        alt="cargoship" className="hero_image"/>
        {/* <img src={imageSrc} alt="cargoship" className="hero_image"></img> */}
        <h1 className="hero_title">Shipping made simple.</h1>
    </div>
}
export default Hero;   