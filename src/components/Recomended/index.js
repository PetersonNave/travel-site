import {React, useState, useEffect } from 'react';
import './style.css';



import FlightIco from '../../src/icons/noun_Flight_-1.png';
import HotelIco from '../../src/icons/noun_Hotel_-2.png';
import PlateIco from '../../src/icons/noun_Plate_-1.png';


export default()=>{

  const [places, SetPlaces] = useState( [
    {
      Name: "Singapore",
      ImageName: 'Singapore.png',
      Description: "Singapore, officially the Republic of Singapore, is as",
      Price: 38800,
      Distance: 1000,
      Trip: {Night: 2, Day: 0},
    },
    {
      Name: "Thailand",
      ImageName: 'Thailand.png',
      Description: "Thailand is a Southeast Asian country. it's known for",
      Price: 34200,
      Distance: 2000,
      Trip: {Night: 2, Day: 0},
    },
    {
      Name: "Paris", 
      ImageName: 'Paris.png',
      Description: "Paris, France's capital, is a major European city and a",
      Price: 40900,
      Distance: 1500,
      Trip: {Night: 2, Day: 0},
    },
    {
      Name: "New Zealand",
      ImageName: 'NewZealand.png',
      Description: "New Zealand is an island country in the",
      Price: 27000,
      Distance: 3000,
      Trip: {Night: 1, Day: 1},
    },
    {
      Name: "Bora Bora",
      ImageName: 'BoraBora.png',
      Description: "Bora Bora is a small South Pacific island northwest of",
      Price: 38800,
      Distance: 1000,
      Trip: {Night: 2, Day: 2},
    },
    {
      Name: "London",
      ImageName: 'London.png',
      Description: "London, the capital of England and the United",
      Price: 54000,
      Distance: 2300,
      Trip: {Night: 3, Day: 2},
    },
  ]);

  useEffect(()=>{
    fetch('http://192.170.208.105:3001/places') .then(response => response.json())
    .then(placesResponse => {
      SetPlaces(placesResponse);
      console.log(places)

    });
    
  },[]);

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

            <div className='placeArea'>
                {places.map((item, key) =>(
                   <div className='placeCont'>
                       <img className='placeImage' src={"images/" + item.ImageName}/>
                       <p className='placeName'><strong>{item.Name}</strong></p>
                       <p className='placeDescription'>{item.Description}</p>
                       <div className='details'>
                            <div className='iconsAndDistance'>
                                <div className='placeIcons'>
                               <img src={HotelIco}></img>   
                               <img src={PlateIco}></img>   
                               <img src={FlightIco}></img>   
                            </div>
                                {/* <p className='placeDistance'>{item.Distance} Kms</p> */}
                                <p className='placeDistance'>1000 Kms</p>
                            </div>   
                            <div className='priceAndTripTime'>
                                <p className='tripPrice'><strong>${parseInt(item.Price).toLocaleString('en-US')}</strong></p>
                                <p className='tripTime'>Approx 2 Night 0 day trip</p>
                                {/* <p className='tripTime'>Approx {item.Trip.Night} Night {item.Trip.Day} day trip</p> */}
                            </div>
                        </div>
                   </div>
                ))}    
                
            </div>    
           
        </section>


    );
}