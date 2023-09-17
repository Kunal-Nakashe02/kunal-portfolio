import React from 'react';
import { useTheme } from '../context/ThemeContext';
import './home.css';
import Typewriter from 'typewriter-effect';
import kunalcv from './CV_2023.pdf';
import {BsFillMoonFill,BsFillSunFill} from 'react-icons/bs';
import Fade from 'react-reveal/Fade';


const Home = () => {

  const[theme , setTheme]=useTheme();
  // handle theme 
  const HandleTheme =()=>{
    setTheme((prevState)=>(prevState) ==='light'?'dark':'light')
  }
  return (
    <>
    
    <div className='container-fluid home-container'id="home">
      <div className='theme-btn' onClick={HandleTheme}>
        {theme === 'light'?(<BsFillMoonFill size={25}/>):(<BsFillSunFill size={25}/>)}
      </div>
       <div className='container home-content'>
      <Fade right>
        <h2>Hi👋 I'm a</h2>
        <h1>
        <Typewriter 
        options={{
        strings: ['FullStack Web App Developer !', 'MERN Stack Developer !',],
        autoStart: true,
        loop: true,
        }}
        />
        </h1>
        </Fade>
        <Fade bottom>
        <div className='home-buttons'>
          <a className='btn btn-hire' 
          href='https://api.whatsapp.com/send?phone=7066396598' rel='noreferrer' target='_blank'>
          HIRE ME
          </a>
          <a className='btn btn-cv'href={kunalcv} download='Resume-kunal_Nakashe.pdf'>
          My Resume
          </a>
        </div>
        </Fade>
       </div>
    </div>
    
    </>
  )
}

export default Home;