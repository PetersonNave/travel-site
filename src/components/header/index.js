import {React} from 'react';
import logo from '../../src/icons/logo.png'
import './style.css';

export default()=>{
    return(
        <div className='header'>
             <ul>
                <div className='logo'>
                    <img src={logo}/>
                    <label>Travelo</label>
                </div>   
                <li>
                    <a href='/'>Home</a>
                    <a href='/'>About</a>
                    <a href='/'>Places</a>
                    <a href='/'>Careers</a>
                    <a href='/'>Blog</a>
                </li>
                <button>Connect</button>
             </ul>
           
        </div>
       
    );
}