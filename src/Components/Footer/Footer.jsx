import React from 'react'
import './Footer.css'
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai';
import { RiInstagramFill } from 'react-icons/ri';
import { SiTelegram , SiReact} from 'react-icons/si';

export default function Footer() {
    return (
        <div className='footer'>
            <div className="footer-contanier">
                <div className="footer-logo">
                    <SiReact size={80} color={'#7032f6'}/>
                </div>
                <div className="footer-name">
                    <h1>Roshanak Roshani</h1>
                    <p>Front-End</p>
                </div>
                <ul className="footer--socal-madia">
                    <li>
                        <AiFillLinkedin size={21} color={'#d1c4e9'}/>
                    </li>
                    <li>
                        <AiFillGithub size={21} color={'#d1c4e9'}/>
                    </li>
                    <li>
                        <RiInstagramFill size={21} color={'#d1c4e9'}/>
                    </li>
                    <li>
                        <SiTelegram size={20}  color={'#d1c4e9'}/>
                    </li>
                </ul>
                <div className="footer-relationship">
                    <p>My Emeil Contact</p>
                    <p>roshanaroshani99@gmail.com</p>
                </div>
             
            </div>
        </div>
    )
}
