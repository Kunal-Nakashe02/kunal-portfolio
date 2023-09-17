import React from 'react';
import "./Contact.css";
import axios from 'axios';
import contact from "./contact.jpeg";
import {BsLinkedin,BsGithub,BsFacebook} from 'react-icons/bs';
import Zoom from 'react-reveal/Zoom';
import LightSpeed from 'react-reveal/LightSpeed';
import { useState } from 'react';


const Contact = () => {

 
        const [formData, setFormData] = useState({
          name: '',
          email: '',
          msg: '',
        });
      
const [responseMessage, setResponseMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:3001/api/send-email', formData);
      setResponseMessage(response.data.message);
    } catch (error) {
      console.error(error);
      setResponseMessage('Failed to send email');
    }
  };
    
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <>
       <div className='contact' id='contact'>
            <div className='card card0 border-0'>
                <div className='row'>
                    <div className='col-md-6 col-lg-6 col-xl-6 col-sm-12'>
                        <div className='card1'>
                            <div className='row border-line'>
                                <LightSpeed>
                                <img className='image' src={contact} alt='contact me'/>
                                </LightSpeed>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-6 col-md-6'>
                        <Zoom>
                    <div className='card2 d-flex card border-0 px-4 py-5'>
                        <div className='row'>
                            <div className='row'>
                                <h6>Contact With 
                                <a href='https://www.linkedin.com/in/kunal-nakashe-5445b122a/' target='_blank'>
                                <BsLinkedin color='blue' size={30} className='ms-2' />
                                </a>
                                <a href='https://github.com/Kunal-Nakashe02' target='_blank'>
                                <BsGithub color='black' size={30} className='ms-2'/>
                                </a>
                                {/* <a href='https://www.linkedin.com/in/kunal-nakashe-5445b122a/' target='_blank'>
                                <BsFacebook color='blue' size={30} className='ms-2'/>
                                </a> */}
                                </h6>
                            </div>
                       
                        <div className='row px-3 mb-4'>

                        <div className='line'/>
                                <small className='or text-center'>OR</small>
                            <div className='line'/>
                      
                           <form onSubmit={handleSubmit}>
                            <div className='row px-3'>
                                <input type='text'
                                name='name'
                                placeholder='Enter Your Name'
                                className='mb-3'
                                value={formData.name}
                                onChange={handleChange}
                                />
                            </div>
                            <div className='row px-3'>
                                <input type='email' 
                                name='email'
                                placeholder='Enter Your Email address'
                                className='mb-3'
                                value={formData.email}
                                onChange={handleChange}
                                  />
                            </div>
                            <div className='row px-3'>
                                <textarea type='text' 
                                name='msg' 
                                placeholder='Write your Message'
                                 className='mb-3'
                                 value={formData.msg}
                                 onChange={handleChange}
                                 />
                            </div>

                            <div className='row px-3'>
                                <button type='submit' className='button'>SEND MESSAGE</button>
                            </div>
                            </form>
                            {responseMessage && <div>{responseMessage}</div>}
                        </div>
                        </div>
                    </div>
                    </Zoom>
                    </div>
                </div>
            </div>
       </div>
    </>
  )
}

export default Contact;