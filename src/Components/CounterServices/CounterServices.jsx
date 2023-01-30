import React from 'react'
import './CounterServices.css'
import { BsClock } from 'react-icons/bs';
// import {IoHeartOutline } from 'react-icons/io';
import {IoBriefcaseOutline ,IoHeartOutline} from 'react-icons/io5';

export default function CounterServices() {
    return (
        <div className="counter-sercices--contaeiner">
            <div className='counter-services'>
                <div className="counter-services--count">
                    <div className="services-icon">
                        <IoBriefcaseOutline size={55} color={"#7032f6"} />
                        <span>123</span>
                    </div>
                    <p>Completed Project</p>
                </div>
                <div className="counter-services--count">
                    <div className="services-icon">
                        <BsClock size={55} color={"#7032f6"} />
                        <span>2341</span>
                    </div>
                    <p>Happy Cllents</p>
                </div>
                <div className="counter-services--count">
                    <div className="services-icon">
                        <IoHeartOutline size={55} color={"#7032f6"} />
                        <span>678</span>
                    </div>
                    <p>Happy Cllents</p>
                </div>
            </div>
        </div>
    )
}
