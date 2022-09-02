import React from 'react'
import "./header.css"
import { useRef,useEffect } from "react";
import {gsap} from 'gsap'

const Header = () => {
    
    const boxRef = useRef();
     
    useEffect(() => {
        gsap.to((".title-slide"), { opacity:1, duration:1.3,y:50});
      }, []);
      
    useEffect(() => {
        gsap.to((".nav"), { opacity:1, duration:1.3});
      }, []);

    function openMenu() {
        var x = document.getElementById("myTopnav");
        if (x.className === "topnav") {
            x.className += " responsive";
        } else {
            x.className = "topnav";
        }
    }
  return (
    <div>
        <div className='slide'>
            <div className='blur-slide'>
                <div className="topnav" id="myTopnav">
                    <div className='nav'>
                        <img src={require('./../../asset/img/logo.png')} className="logo" />
                        
                        <div className='right-menu'>
                            <img src={require('./../../asset/img/ID_EN.png')} width="40px"/>
                            <img src={require('./../../asset/img/user.png')} width="15px"/>
                            <img src={require('./../../asset/img/cart.png')} width="24px" className='cart-img'/>
                        </div>
                        <a href="#Products" className='list-menu'>Products</a>
                        <a href="#Culinaria"  className='list-menu'>Culinaria</a>
                        <a href="#Kitchen"  className='list-menu'>Kitchen Design</a>
                        <a href="#Blog"  className='list-menu'>Blog</a>
                        <a href="#Promotions"  className='list-menu'>Promotions</a>
                        <a href="#Services"  className='list-menu'>Services</a>
                        <a href="#Location"  className='list-menu'>Our Location</a>
                        
                        <a href="#" className="icon" onClick={openMenu}>
                            <img src={require('./../../asset/img/menu.png')}/>
                        </a>
                    </div>
                    
                    <div className='title-slide' ref={boxRef}>
                        Smartest solutions <br/>
                        for home and living
                    </div>
                </div>
            </div>
        </div>		
    </div>
  )
}

export default Header