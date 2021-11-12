import React, { useState } from 'react';
import CenterItem from '../CenterItem/CenterItem';
//import photo1 from './IMG_0850.png'


const CenterInfo = (props) => {
    const [information] = useState (
          [
            {   id: 1, 
//              image: logo, 
                image: "./IMG_0851.png",
                alt: "first image", 
                title: "Create an account", 
                main: "Create to get started",
                footer: "An account is created...",
                isLeft: true,
            },
            {   id: 2, 
                image: './IMG_0850.png', 
                alt: "second image", 
                title: "Explore varieties", 
                main: "Shop for your meal",
                footer: "Enjoy while doing it...",
                isLeft: false, },

          ]
        
    )




    return(
        <>
        <h1 style = {{textAlign: "center", marginTop: "150px"}}> How the app works</h1>
        {information.map(info => 
            <CenterItem info = {info} key = {info.id}/>
        )}
        </>
    )
}




export default CenterInfo;