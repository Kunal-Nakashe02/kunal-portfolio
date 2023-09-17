import React from 'react'
import './about.css'
import kunal from './myimg.jpeg';
import Jump from 'react-reveal/Jump';


const About = () => {
  return (
    <>
    <Jump>
    <div className='about' id='about'>
        <div className='row'>
            <div className='col-md-6'></div>
            <div className='col-md-6'></div>
            <div className=' col-md-6 col-xl-6 col-lg-6 col-xs-12 about-img'>
            <img src={kunal} alt='Profile'/>
            </div>
            <div className='col-md-6 col-xl-6 col-lg-6 col-xs-12 about-content'>
              <h1>About Me</h1>
              <p>
                Hello sir/madam,<br/>
                My name is kunal nakashe and I am from amravati,
                
                I have recently completed my graduation in bsc computer science 
                {/* from the sant gadge baba amravati university and learn various skills and technologies */}
                
                I'd be happy to tell you about myself as a MERN stack developer. I've been passionate about web development for several months now, 
                and I've honed my skills specifically in the MERN stack because of its robust capabilities for building modern, dynamic web applications.
                In terms of my technical background, I have a strong foundation in JavaScript, which is essential for both the front-end and back-end development in the MERN stack. 
                I'm proficient in using React on the front-end to create interactive and responsive user interfaces, 
                On the back-end, I'm experienced with Node.js and Express.js. I've built RESTful APIs and used Express.js to create a scalable and efficient server-side architecture.
                 MongoDB is my preferred database .
                 using this i have created some projects like inventory page,quiz app ,etc <br/>
                 My hobbies are running and playing games.
              </p>
            </div>
        </div>
    </div>
    </Jump>
    </>
  )
}

export default About;