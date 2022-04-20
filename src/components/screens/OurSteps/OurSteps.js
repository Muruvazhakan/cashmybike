
import React from 'react';
import './OurSteps.css';
import { Button, FloatingLabel, Range, Image } from 'react-bootstrap';
import * as animate from 'react-reveal/';
import step1 from "../../../Assests/Data/step1.png";
import step2 from "../../../Assests/Data/step2.png";
import step3 from "../../../Assests/Data/step3.png";
export const OurSteps = () => {
    const handleSellButton = () => {
        console.log("handleSellButton");
    }
    return (
        <>
        <animate.Zoom delay={1000}>
            <div className='Sell-bike-header'>Our Process</div>
            <div  className=" photo-steps  " >
             
                <Image
                    className=" our-steps  "
                    //  src={imageUrl.src} 
                    src={step1}

                />
           
                <Image
                    className=" our-steps  "
                    //  src={imageUrl.src} 
                    src={step2}

                />
                <Image
                    className=" our-steps  "
                    //  src={imageUrl.src} 
                    src={step3}

                />
            </div>
            </animate.Zoom >
            {/* <div style={{ backgroundImage:`url(${image})` }} /> */}
        </>
    )
}

export default OurSteps;