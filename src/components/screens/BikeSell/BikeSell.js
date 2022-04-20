
import React, { useEffect } from 'react';
import './BikeSell.css';
import { Button, FloatingLabel, Range } from 'react-bootstrap';
import image from "../../../Assests/Data/bike2bikebg.png";
import * as animate from 'react-reveal/';


export const BikeSell = () => {
    const handleSellButton = () => {
        console.log("handleSellButton window.innerWidth " + window.innerWidth);
    }
    useEffect = () => {
        console.log("useEffect window.innerWidth " + window.innerWidth);
    }
    return (
        <>
         
                <div className="bikesell-header"  >
                    <img className="header-images  "
                        //  src={imageUrl.src} 
                        src={image}
                    />
                    {/* <div className='Sell-bike-header  centered-top'>Sell your bike in 5 Mins</div> */}
                    {/* <div className='Sell-bike-header'>USED TWO WHEELER - BUY & SELL ONLINE</div> */}
                    <div className='Sell-bike-header '>
                        <Button
                            placeholder='Submit'
                            className='button-input-stype-header centered'
                            variant="secondary"
                            size={window.innerWidth > "700" ? "lg" : "sm"}
                            // size="lg"
                            onClick={handleSellButton}
                            href="/Bikes"
                        >
                            Cash My Bike
                        </Button>
                    </div>
                </div>
           
        </>
    )
}

export default BikeSell;