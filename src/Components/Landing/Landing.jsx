import React from 'react'
import "./Landing.css"
import { IoSettingsSharp } from 'react-icons/io5';
import { IoIosChatboxes, IoIosCopy } from 'react-icons/io';
import { FaRegUserCircle } from 'react-icons/fa';
import { AiFillHome, AiFillLinkedin, AiFillGithub } from 'react-icons/ai';
import { TbGridDots } from 'react-icons/tb';
import { MdEmail } from 'react-icons/md';
import { RiInstagramFill } from 'react-icons/ri';
import { SiTelegram } from 'react-icons/si';


export default function Landing() {
    return (
        <div className="landing">
            <div className="landing-container">
                <nav className="landing-navbar">
                    <img src="./images/loogo.png" alt="" className='landing-logo' />
                    <ul className='landing-list'>
                        <li className='landing-list--item'>
                            <FaRegUserCircle className='landing-list-icon' ></FaRegUserCircle>
                        </li>
                        <li className='landing-list--item'>
                            <AiFillHome className='landing-list-icon' ></AiFillHome>
                        </li>
                        <li className='landing-list--item'>
                            <TbGridDots className='landing-list-icon' ></TbGridDots>
                        </li>
                        <li className='landing-list--item'>
                            <IoIosChatboxes className='landing-list-icon' ></IoIosChatboxes>
                        </li>
                        <li className='landing-list--item'>
                            <IoIosCopy className='landing-list-icon' ></IoIosCopy>
                        </li>
                        <li className='landing-list--item'>
                            <MdEmail className='landing-list-icon' ></MdEmail>
                        </li>
                    </ul>
                </nav>

                <div className="landing-banner">
                    <IoSettingsSharp className='landing-banner-icon'></IoSettingsSharp>
                    <div className="landing-banner__rectangle">
                        <div className="landing-banner-content">
                            <h2>Hello World,</h2>
                            <h1>I am Roshanak , Front-end </h1>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur molestiae praesentium rerum aliquid! </p>
                        </div>
                        <ul className="landing-banner-social">
                            <li>
                                <a href="https://www.linkedin.com/in/roshanak-roshani-0485a2232">
                                    <AiFillLinkedin size={18} color={"#d1c4e9"}/>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <SiTelegram size={18} color={"#d1c4e9"}/>
                                </a>
                            </li>
                            <li>
                                <a href="https://instagram.com/roshanak_roshani01?igshid=NDk5N2NlZjQ=">
                                    <RiInstagramFill size={18} color={"#d1c4e9"}/>
                                </a>
                            </li>
                            <li>
                                <a href="https://github.com/roshana01">
                                    <AiFillGithub size={18} color={"#d1c4e9"}/>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

            </div>
        </div>
    )
}
