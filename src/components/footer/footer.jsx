import React from 'react'
import './footer.css'
const Footer = () => {
  return (
    <div>
        <div className='footer'>
            <div className='footer-wraper'>
                <div className='footer-content'>
                    <img src={require('./../../asset/img/logo-black.png')}/>
                    <br/>
                    <br/>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ac 
                    lectus a leo consequat convallis. Lorem ipsum dolor sit amet, consectetur 
                    adipiscing elit. Suspendisse accumsan ut magna eu aliquam. Lorem ipsum 
                    dolor sit amet, consectetur adipiscing elit. Nulla pellentesque felis 
                    congue risus laoreet, sed aliquet elit faucibus. Phasellus ipsum velit, 
                    viverra eget justo at, feugiat accumsan justo. Nullam nec velit convallis, 
                    posuere arcu scelerisque, facilisis felis. Morbi eget neque sit amet arcu 
                    fringilla venenatis ac vel urna. Vivamus eu lorem vitae nulla efficitur 
                    luctus. Nam ante est, varius non gravida ut, iaculis commodo metus. 
                    Integer eu interdum erat, efficitur vulputate lorem. Cras sed justo 
                    vitae sapien rutrum gravida et cursus libero. Pellentesque et tincidunt 
                    tortor.

                </div>
                
                <div className='footer-content'>
                    <div className='contact'>
                        <b>Contact Us</b>
                        <form>
                            <input type={'text'} placeholder="Nama" />
                            <input type={'text'} placeholder="Email"/>
                            <textarea placeholder="Tuliskan Pesan Anda"></textarea> 
                            <button>kirim</button>
                        </form>
                    </div>
                </div>          
                
                <div className='footer-content'>
                    <div className='menu'>
                        <b>Menu</b>
                        <ul>
                            <li>Home</li>
                            <li>About</li>
                            <li>Catalog</li>
                            <li>Contact Us</li>
                        </ul>
                        <div className='sosmed'>
                            <ul>
                                <li><img src={require('./../../asset/img/sosmed1.png')}/></li>
                                <li><img src={require('./../../asset/img/sosmed2.png')}/></li>
                                <li><img src={require('./../../asset/img/sosmed3.png')}/></li>
                            </ul>
                        </div>
                        <div className='copyright'>
                            Copyright 2021 &copy; MODENADevTest <br/>
                            Deployed by Rizwan Rifaldy
                        </div>
                    </div>
                </div>            
            </div>
        </div>
    </div>
  )
}

export default Footer