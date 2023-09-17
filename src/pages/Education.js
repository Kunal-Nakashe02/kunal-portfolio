import React from 'react';
import{MdSchool} from 'react-icons/md'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import "./Education.css";

const Education = () => {
  return (
    <>
        <div className=' education' id='education'>
            <h2 className='col-12 mt-3 mb-1 text-center text-uppercase'>
            Education Details
            </h2>
            <hr/> 
       
        <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: 'white', color: 'black' }}
          contentArrowStyle={{ borderRight: '7px solid  white' }}
          date="2018 - 2019"
          iconStyle={{ background: 'rgb(40, 100, 150)', color: '#fff' }}
          icon={<MdSchool />}
  >
          <h3 className="vertical-timeline-element-title">HSC</h3>
          <h4 className="vertical-timeline-element-subtitle">Shrimati Narsamma Arts, Commerce & Science College
          Kiran Nagar, Amravati</h4>
       
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: 'white', color: 'black' }}
          contentArrowStyle={{ borderRight: '7px solid  white' }}
          date="2020 - 2023"
          iconStyle={{ background: 'rgb(40, 100, 150)', color: '#fff' }}
          icon={<MdSchool />}
  >
          <h3 className="vertical-timeline-element-title">BSC CS</h3>
        <h4 className="vertical-timeline-element-subtitle">RDIK & KD COLLEGE SANT GADGE BABA AMRAVATI UNIVERSITY</h4>
       
        </VerticalTimelineElement>
        </VerticalTimeline>
        </div>
    </>
  )
}

export default Education