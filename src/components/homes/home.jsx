import React from 'react'
import './home.css'
const Home = () => {
  return (
    <div>    
        <div className='title-home'>End-to-end Home Solution - And Beyond</div>
        <div className='home-solution'>
            <div className='solution section-1'>
                <div className='blur'>
                    <div className='title-section'>
                        <p>Cleaning</p>
                        Redefine your household Hygiene<br/>
                    </div>            
                    <button>Browse Product <img src={require('./../../asset/img/arrow.png')}/></button>
                </div>
            </div>
            <div className='solution section-2'>
                <div className='blur'>
                    <div className='title-section'>
                        <p>Cooking</p>
                        Redefine your household Hygiene<br/>
                    </div>            
                    <button>Browse Product <img src={require('./../../asset/img/arrow.png')}/></button>
                </div>
            </div>
            <div className='solution section-3'>
                <div className='blur'>
                    <div className='title-section'>
                        <p>Cooling</p>
                        Redefine your household Hygiene<br/>
                    </div>            
                    <button>Browse Product <img src={require('./../../asset/img/arrow.png')}/></button>
                </div>
            </div>
            <div className='solution section-4'>
                <div className='blur'>
                    <div className='title-section'>
                        <p>Professional</p>
                        Redefine your household Hygiene<br/>
                    </div>            
                    <button>Browse Product <img src={require('./../../asset/img/arrow.png')}/></button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Home