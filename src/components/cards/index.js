import {React } from 'react';
import './style.css'

export default(props)=>{

    return(
        <section className='cardSection'>
            <div className='contents'>
                <div className='imageBg'>
                    <img className='image' src={props.icon}/>
                </div>
                <p className='title'><strong>{props.title}</strong></p>
                <p className='description'>{props.Description}</p>
            </div>
    </section>
    );
}