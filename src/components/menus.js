import React from 'react';
import './menus.css';
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';
import kunal from './myimg.jpeg';
import {FcHome,FcAbout,FcBiotech,FcAddDatabase,FcReadingEbook,FcVideoProjector,FcBusinessContact} from 'react-icons/fc';
import { Link} from 'react-scroll';


const Menus = ({toggle}) => {
  return (
    <>
    {toggle ? 
    <>
    <Zoom>
    <div className='navbar-profile-pic'>
        <img src={kunal} alt='kunal nakashe '/>
    </div>
    </Zoom>
    <Fade left>
    <div className='nav-items'>
        <div className='nav-item'>
            <div className='nav-link'>
                <Link to="home" spy={true} smooth={true} offset={-100} duration={100}>
                <FcHome/>HOME
                </Link>
                </div>
        </div>
        <div className='nav-item'>
            <div className='nav-link'>
            <Link to="about" spy={true} smooth={true} offset={-100} duration={100}>
            <FcAbout/>ABOUT
            </Link>
        </div>
    </div>
    <div className='nav-item'>
            <div className='nav-link'>
            <Link to="education" spy={true} smooth={true} offset={-100} duration={100}>
            <FcReadingEbook/>EDUCATION 
            </Link>
        </div>
    </div>
  
    <div className='nav-item'>
            <div className='nav-link'>
                <Link to="tech-stack" spy={true} smooth={true} offset={-100} duration={100}>
                <FcBiotech/>TECH STACK
                </Link>
        </div>
    </div>
    
    <div className='nav-item'>
            <div className='nav-link'>
            <Link to="projects" spy={true} smooth={true} offset={-100} duration={100}>
            <FcVideoProjector/>PROJECTS
            </Link>
        </div>
    </div>
    <div className='nav-item'>
            <div className='nav-link'>
            <Link to="work-experience" spy={true} smooth={true} offset={-100} duration={100}>
            <FcAddDatabase/>WORK EXPERIENCE
            </Link>
        </div>
    </div>
    <div className='nav-item'>
            <div className='nav-link'>
            <Link to="contact" spy={true} smooth={true} offset={-100} duration={100}>
            <FcBusinessContact/>CONTACT
            </Link>
        </div>
    </div>
    </div>
    </Fade>
    </>
    :
    <>
    
    <div className='nav-items'>
        <div className='nav-item'>
            <div className='nav-link'>
            <Link to="home" spy={true} smooth={true} offset={-100} duration={100}>
            <FcHome title='Home'/>
                </Link>
           </div>
        </div>
 
    <div className='nav-item'>
            <div className='nav-link'>
            <Link to="about" spy={true} smooth={true} offset={-100} duration={100}>
            <FcAbout title='ABOUT'/>
            </Link>
        </div>
    </div>

    <div className='nav-item'>
            <div className='nav-link'>
            <Link to="education" spy={true} smooth={true} offset={-100} duration={100}>
            <FcReadingEbook title='EDUCATION'/>
            </Link>
        </div>
    </div>

    
    <div className='nav-item'>
            <div className='nav-link'>
            <Link to="tech-stack" spy={true} smooth={true} offset={-100} duration={100}>
            <FcBiotech title='TECH STACK'/>
                </Link>
        </div>
    </div>

    <div className='nav-item'>
            <div className='nav-link'>
            <Link to="projects" spy={true} smooth={true} offset={-100} duration={100}>
            <FcVideoProjector title='PROJECTS'/>
            </Link>
        </div>
    </div>
  
    <div className='nav-item'>
            <div className='nav-link'>
            <Link to="work-experience" spy={true} smooth={true} offset={-100} duration={100}>
            <FcAddDatabase title='WORK EXPERIENCE'/>
            </Link>
        </div>
    </div>

    <div className='nav-item'>
            <div className='nav-link'>
            <Link to="contact" spy={true} smooth={true} offset={-100} duration={100}>
            <FcBusinessContact title='CONTACT'/>
            </Link>
        </div>
    </div>
    </div>

    </>
    }
   
    </>
  )
}

export default Menus;