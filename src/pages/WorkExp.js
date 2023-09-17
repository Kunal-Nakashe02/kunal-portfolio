import React from 'react';
import {GrReactjs} from 'react-icons/gr'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import './WorkExp.css';

const WorkExp = () => {
  return (
    <>
        <div className=' work' id='work-experience'>
            <div className=' container work-exp'>
                <h2 className='col-12 mt-3 mb-1 text-center text-uppercase'>
                    WORK EXPERIENCE
                </h2>
                <hr/> 
                <VerticalTimeline lineColor='#159fa7'>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: 'white', color: 'black' }}
          contentArrowStyle={{ borderRight: '7px solid  white' }}
          date=" 2023"
          iconStyle={{ background: 'aqua', color: 'blue' }}
          icon={<GrReactjs />}
  >
            <h3 className="vertical-timeline-element-title">Mern Stack Inten</h3>
            <h4 className="vertical-timeline-element-subtitle">Treue Technologies</h4>
            <p>
                developed full stack web application using react for frontend mongo Db for database node js for backend .
                include user registration and login, data storeage , frontend and backend development , api integration,error handling and security implementations.
            </p>
       
        </VerticalTimelineElement>

        
        </VerticalTimeline>
            </div>
        </div> 
    </>
  )
}

export default WorkExp