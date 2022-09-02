import React from 'react'
import './showroom.css'
const Showroom = () => {
  return (
    <div>
      <div className='title-content'>Step Into Our Virtual Showroom</div>
      
      <div className='show-1'>
        <div className='blur'>
          <div className='show-title'>
            <p className='show-name'>Suryo</p> <br/>
            <p className='show-address'>Jln. Suryo No. 22, Jakarta 12180<br/>
            Tel : (62-21) 722.7813</p>
            <button>View Showroom <img src={require('./../../asset/img/arrow.png')}/></button>
          </div>
        </div>
      </div>
      
      <div className='show-2'>
        <div className='blur'>
          <div className='show-title'>
            <p className='show-name'>Satrio</p> <br/>
            <p className='show-address'>
              Jln. Prof. Dr. Satrio C4 No. 13, Jakarta 12950<br/> 
              Tel : (62-21) 2996.9588
            </p>
            <button>View Showroom <img src={require('./../../asset/img/arrow.png')}/></button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Showroom