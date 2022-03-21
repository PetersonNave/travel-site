import {React} from 'react';
import './style.css'
import facebookIco from '../../src/icons/facebook.svg'
import instagramIco from '../../src/icons/Instagram.svg'
import linkedinIco from '../../src/icons/LinkedIn.svg'

export default () =>{
    return(

        <section className='footerSection'>
            <p className='copyrightText'>Copyright © 2020 Travelo. All rights reserved</p>
            <p><strong>Site feito por Peterson Melo 💙</strong></p>
            <div className='socialMedias'>     
            <img src={facebookIco}/>
            <img src={instagramIco}/>
            <img src={linkedinIco}/>
            </div>
        </section>

    );
}