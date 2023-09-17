import React, { useState } from 'react';
import {GiHamburgerMenu} from 'react-icons/gi';
import {FcHome,FcAbout,FcBiotech,FcAddDatabase,FcReadingEbook,FcVideoProjector,FcBusinessContact} from 'react-icons/fc';
import {AiOutlineMenuUnfold} from 'react-icons/ai';
import { Link} from 'react-scroll';
import './MobileNav.css';

const MobileNav = () => {
    const[open ,setOpen]=useState(false);

    // handle open
    const HandleOpen =()=>{
        setOpen(!open);
    }
    // handle menus click

    const HandleMenuClick=()=>{
        setOpen(false);
    }

  return (
    <>
        <div className='mobile-nav'>
            <div className='mobile-nav-header'>
                {open? 
                (<AiOutlineMenuUnfold className='mobile-nav-icon' size={30} onClick={HandleOpen}/>)
                    :
                (<GiHamburgerMenu className='mobile-nav-icon' size={30} onClick={HandleOpen}/>)}
                <span className='mobile-nav-title'>My Portfolio App</span>
            </div>
            {open &&(
 <div className='mobile-nav-menu'>
 <div className='nav-items'>
<div className='nav-item'>
 <div className='nav-link'>
     <Link to="home" spy={true} smooth={true} offset={-100} duration={100} onClick={HandleMenuClick}>
     <FcHome/>HOME
     </Link>
     </div>
</div>
<div className='nav-item'>
 <div className='nav-link'>
 <Link to="about" spy={true} smooth={true} offset={-100} duration={100} onClick={HandleMenuClick}>
 <FcAbout/>ABOUT
 </Link>
</div>
</div>
<div className='nav-item'>
 <div className='nav-link'>
 <Link to="education" spy={true} smooth={true} offset={-100} duration={100} onClick={HandleMenuClick}>
 <FcReadingEbook/>EDUCATION 
 </Link>
</div>
</div>

<div className='nav-item'>
 <div className='nav-link'>
     <Link to="tech-stack" spy={true} smooth={true} offset={-100} duration={100} onClick={HandleMenuClick}>
     <FcBiotech/>TECH STACK
     </Link>
</div>
</div>

<div className='nav-item'>
 <div className='nav-link'>
 <Link to="projects" spy={true} smooth={true} offset={-100} duration={100} onClick={HandleMenuClick}>
 <FcVideoProjector/>PROJECTS
 </Link>
</div>
</div>
<div className='nav-item'>
 <div className='nav-link'>
 <Link to="work-experience" spy={true} smooth={true} offset={-100} duration={100} onClick={HandleMenuClick}>
 <FcAddDatabase/>WORK EXPERIENCE
 </Link>
</div>
</div>
<div className='nav-item'>
 <div className='nav-link'>
 <Link to="contact" spy={true} smooth={true} offset={-100} duration={100} onClick={HandleMenuClick}>
 <FcBusinessContact/>CONTACT
 </Link>
</div>
</div>
</div>
 </div>
            )}
           
        </div>
    </>
  )
}

export default MobileNav;