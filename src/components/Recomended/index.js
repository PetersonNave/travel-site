import {React, useState } from 'react';
import './style.css';

export default()=>{
    const [blueLineMargin, setBlueLineMargin] = useState(-10)
    const [blueLineWidth, setBlueLineWidth] = useState(225)

   function selectedLine(margin, width) {
        console.log("opan!")
        setBlueLineMargin(margin);
        setBlueLineWidth(width);
    }

    return(
        <section className='recomendedSection'>
            <h2 className='recommendedTitle'>Recommended Destination</h2>
        
            <div className='options'>
                <a onClick={()=>selectedLine(-10, 225)} >The Weekend Break</a>
                <a onClick={()=>selectedLine(247, 250)}>The Package Hodivday</a>
                <a onClick={()=>selectedLine(528, 180)}>The Group Tour</a>
                <a onClick={()=>selectedLine(737, 270)}>Long Termo Slow Travel</a>
                <div style={{
                    marginLeft: blueLineMargin,
                    width: blueLineWidth
                }} className='borderOfSelected'></div>
            </div>


           
        </section>


    );
}