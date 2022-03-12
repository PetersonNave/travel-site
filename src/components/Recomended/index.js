import {React, useState } from 'react';
import './style.css';

import Singapore from '../../src/images/Singapore.png';
import Thailand from '../../src/images/Thailand.png';
import Paris from '../../src/images/Paris.png';
import NewZealand from '../../src/images/NewZealand.png';
import BoraBora from '../../src/images/BoraBora.png';
import London from '../../src/images/London.png';

import FlightIco from '../../src/icons/noun_Flight_-1.png';
import HotelIco from '../../src/icons/noun_Hotel_-2.png';
import PlateIco from '../../src/icons/noun_Plate_-1.png';

const Places = [
  {
    Name: "Singapore",
    Image: Singapore,
    Description: "Singapore, officially the Republic of Singapore, is as",
    Price: 38800,
    Distance: 1000,
    Trip: {Night: 2, Day: 0},
  },
  {
    Name: "Thailand",
    Image: Thailand,
    Description: "Thailand is a Southeast Asian country. it's known for",
    Price: 34200,
    Distance: 2000,
    Trip: {Night: 2, Day: 0},
  },
  {
    Name: "Paris", 
    Image: Paris,
    Description: "Paris, France's capital, is a major European city and a",
    Price: 40900,
    Distance: 1500,
    Trip: {Night: 2, Day: 0},
  },
  {
    Name: "New Zealand",
    Image: NewZealand,
    Description: "New Zealand is an island country in the",
    Price: 27000,
    Distance: 3000,
    Trip: {Night: 1, Day: 1},
  },
  {
    Name: "Bora Bora",
    Image: BoraBora,
    Description: "Bora Bora is a small South Pacific island northwest of",
    Price: 38800,
    Distance: 1000,
    Trip: {Night: 2, Day: 2},
  },
  {
    Name: "London",
    Image: London,
    Description: "London, the capital of England and the United",
    Price: 54000,
    Distance: 2300,
    Trip: {Night: 3, Day: 2},
  },
];

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

            <div className='PlaceArea'>
                {Places.map((item, key) =>(
                   <div className='placeCont'>
                       <img src={item.Image}/>
                       <p className='placeName'>{item.Name}</p>
                       <p className='placeDescription'>{item.Description}</p>
                       <div className='details'>
                            <div className='iconsAndDistance'>
                                <div className='placeIcons'>
                               <img src={HotelIco}></img>   
                               <img src={PlateIco}></img>   
                               <img src={FlightIco}></img>   
                            </div>
                                <p className='placeDistance'>{item.Distance} Kms</p>
                            </div>   
                            <div className='priceAndTripTime'>
                                <p className='tripPrice'><strong>${item.Price}</strong></p>
                                <p className='tripTime'><strong>Approx {item.Trip.Night} Night {item.Trip.Day} day trip</strong></p>
                            </div>
                        </div>
                   </div>
                ))}    
                
            </div>    
           
        </section>


    );
}