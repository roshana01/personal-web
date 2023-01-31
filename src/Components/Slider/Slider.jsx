import React from 'react'
import './Slider.css'
import { ImMagicWand } from 'react-icons/im';
import { IoGlobeOutline } from 'react-icons/io5';
export default function Slider() {
    return (


        <div className="services-section">
            <div className='services-container'>
                <div className="service-item">
                    <h1>Services</h1>
                     <span className='service-circle'></span> 
                    <p>Lorem ipsum dolor sit consectetur.</p>
                </div>
                <div className="service-item color-item">
                    <ImMagicWand size={70} color={'#661fffb3'}  />
                    <p >UI InterFace Design</p>
                </div>
                <div className="service-item active">
                    <h2>Icone Design</h2>
                    <span className='dasht'>___</span>
                    <p>Lorem ipsum dolor sit amet.</p>
                </div>
                <div className="service-item color-item">
                    <IoGlobeOutline  size={70} color={'#661fffb3'}  />
                    <p>HTML prototyping</p>
                </div>
                
            </div>
        </div>
    )

}