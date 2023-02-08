import React from 'react'
import './Client.css'
export default function Client() {
    return (
        <div className="client-section">
            <div className="client-box">
                <div className="client-title">
                    <h1>What Client Side</h1>
                    <span className='service-circle'></span>
                </div>
                <div className="client-container">
                    <div className="map-img">
                        <img src="./images/mapp.png" alt="" />
                    </div>
                    <div className="hire-info">
                        <h1>Let's Work Togeder</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est ea enim beatae reiciendis cum adipisci, animi fuga iusto nam accusantium doloribus quaerat, dignissimos eos porro molestiae. Quae ratione assumenda laborum? Asperiores, nostrum libero sit vitae eaque officia et autem exercitationem.</p>
                        <button>Hire Me</button>
                    </div>
                </div>
            </div>

        </div>
    )
}
