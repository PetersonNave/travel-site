import {React, useState, useEffect} from 'react';
import logo from '../../src/icons/logo.png';
import menuLogo from '../../src/icons/list.svg';
import './style.css';

export default()=>{
    const [toggleMenu, setToggleMenu] = useState(false);
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    const [menuOn, SetMenuOn] = useState(false);
    useEffect(() => {

        const changeWidth = () => {
          setScreenWidth(window.innerWidth);
        }
    
        
            window.addEventListener('resize', changeWidth)
    
    
      }, [])
    return(
          <nav className='header'>
            {toggleMenu || screenWidth > 1050 && (
                <div className='navWrapper'>
                   <div className='logo'>
                       <img src={logo}/>
                       <label>Travelo</label>
                   </div>   
                   {/* <a href="#" data-activates="mobileMenu" class="button-collapse">
                     <i class="material-icons">menu</i>
                    </a> */}
                   
                   <ul className='noMobileMenu'>
                       <li><a className='homeBtn' href='/'>Home</a></li>
                       <li><a href='/'>About</a></li>
                       <li><a href='/'>Places</a></li>
                       <li><a href='/'>Careers</a></li>
                       <li><a href='/'>Blog</a></li>
                   </ul >
              
                   {/* <ul class="sideNav" id="mobileMenu">
                       <li><a href="/">Angular</a></li>
                       <li><a href="/">Ionic</a></li>
                       <li><a href="/">TypeScript</a></li>
                       <li><a href="/">Cordova</a></li>
                   </ul> */}
                   <button>Connect</button>
                </div>
             )}
              {toggleMenu || screenWidth <= 1050 && (
                    <div className='navWrapper'>
                  
                    {/* <a href="#" data-activates="mobileMenu" class="button-collapse">
                    <i class="material-icons">menu</i>
                    </a> */}

                    <img color='#000' height={40} width={40} src={menuLogo} onClick={()=>{
                       SetMenuOn(!menuOn);
                        }}/> 

                    {menuOn && (
                    <ul className='noMobileMenu'>
                        <li><a className='homeBtn' href='/'>Home</a></li>
                        <li><a href='/'>About</a></li>
                        <li><a href='/'>Places</a></li>
                        <li><a href='/'>Careers</a></li>
                        <li><a href='/'>Blog</a></li>
                    </ul >
                    )}
                    <div className='logo'>
                        <img src={logo}/>
                        <label>Travelo</label>
                    </div>   
                    {/* <ul class="sideNav" id="mobileMenu">
                        <li><a href="/">Angular</a></li>
                        <li><a href="/">Ionic</a></li>
                        <li><a href="/">TypeScript</a></li>
                        <li><a href="/">Cordova</a></li>
                    </ul> */}
                    <button>Connect</button>
                    </div>
              )}

        </nav>
       
    );
}