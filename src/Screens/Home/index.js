import {React} from 'react';
import './style.css';
import ImageBackground from '../../src/images/background.png';

export default()=>{

    return(
        <section className='bannerSectionArea'>
            <div className='bannerSection'>
                <h1>TRAVEL TO EXPLORE</h1>
                <p className='bannerSubtitle'>Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, 
                    Sed Do Eiusmod Tempor Incididunt Ut Labore Et Dolore
                    Magna Aliqua. Ultricies Mi Eget Mauris 
                </p>
                <div className='bannerOptions'>
                    <div>
                        <p><strong>Where You Want to Go</strong></p>
                        <p className='optionSubtitle'>Search your Location</p>
                    </div>
                    <span className='grayLine'></span>
                    <div className='dateBox'>
                        <p><strong>Check-in</strong></p>
                        <p className='optionSubtitle'>Add Date</p>
                    </div>
                    <span className='grayLine'></span>
                    <div className='dateBox' >
                        <p><strong>Check-out</strong></p>
                        <p className='optionSubtitle'>Add Date</p>
                    </div>
                    <button className='exploreBtn'>Explore Now</button>           
                </div>
            </div>
        </section>
       
    );
}