import React from 'react'
import './Main.css'
import Landing from '../../Components/Landing/Landing'
import Slider from '../../Components/Slider/Slider'
import AboutMe from '../../Components/AboutMe/AboutMe'
import CounterServices from '../../Components/CounterServices/CounterServices'
import Projects from '../../Components/Projects/Projects'
import Client from '../../Components/Client/Client'
import Footer from '../../Components/Footer/Footer'


export default function Main() {
  return (
    <>
      <Landing />
      <AboutMe />      
      <CounterServices />
      <Slider />
      <Projects />
      <Client />
      <Footer />
    </>
  )
}


