import React from 'react'
import './layout.css'
import Home from '../pages/home';
import Menus from './menus';
import {AiOutlineDoubleLeft,AiOutlineDoubleRight} from 'react-icons/ai'
import { useState } from 'react';


const Layout = () => {

    const [toggle,setToggle]= useState(true);
    // change toggle
    const HandleToggle = () => {
        setToggle(!toggle)
    }
  return (
    <div className='sidebar-section'>
        <div className={toggle?'sidebar-toggle sidebar':'sidebar'}>
            <div className='sidebar-toggle-icons'>
                <p onClick={HandleToggle} >
                    {toggle? <AiOutlineDoubleLeft size={35}/>:<AiOutlineDoubleRight size={35}/>}  
                </p>
            </div>
              {/* using menus */}
              <Menus toggle={toggle}/>
        </div>
        <div className='container'>
            <Home/>
        </div>
    </div>
  )
}

export default Layout;