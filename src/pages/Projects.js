import React from 'react';
import './Projects.css';
import Jello from 'react-reveal/Jello';


const Projects = () => {
  return (
    <>
    <div className='container project' id='projects'>
        <h2 className='col-12 mt-3 mb-1 text-center text-uppercase'>top recent projects</h2>
        <hr/>
        <p className='pb-3 text-center'> Showcasing My Passion for Web Development.</p>

        <div className='row' id='ads'>
            <Jello>
            <div className='col-md-4'>
                <div className='card rounded'>
                    <div className='card-image'>
                        <span className='card-notify-badge '>Full Stack</span>
                        <img src='https://bloomidea.com/sites/default/files/styles/og_image/public/blog/Tipos%20de%20come%CC%81rcio%20electro%CC%81nico_0.png?itok=jC9MlQZq' alt='E-Commerce'/>
                        <div className="card-image-overly mt-3">
                        <span className='card-detail-badge'>NodeJs</span>
                        <span className='card-detail-badge'>ReactJs</span>
                        <span className='card-detail-badge'>ExpressJs</span>
                        <span className='card-detail-badge'>MongoDb</span>
                        </div>
                        <div className='card-body text-center'>
                            <div className='ad-title'>
                                <h5 className='text-uppercase'>
                                    E-commerce website
                                </h5>
                            </div>
                            <a className='ad-btn' href='#'> View</a>
                        </div>
                    </div>
                </div>
            </div>
              {/* another card  2*/}
            <div className='col-md-4'>
                <div className='card rounded'>
                    <div className='card-image'>
                        <span className='card-notify-badge '>Full Stack</span>
                        <img src='data:image/jpeg;base64,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' alt='E-Commerce'/>
                        <div className="card-image-overly mt-3">
                        <span className='card-detail-badge'>NodeJs</span>
                        <span className='card-detail-badge'>ReactJs</span>
                        <span className='card-detail-badge'>ExpressJs</span>
                        <span className='card-detail-badge'>MongoDb</span>
                        </div>
                        <div className='card-body text-center'>
                            <div className='ad-title'>
                                <h5 className='text-uppercase'>
                                    blood donation website
                                </h5>
                            </div>
                            <a className='ad-btn' href='#'> View</a>
                        </div>
                    </div>
                </div>
            </div>
            {/* another card 3 */}
            <div className='col-md-4'>
                <div className='card rounded'>
                    <div className='card-image'>
                        <span className='card-notify-badge '>Full Stack</span>
                        <img src='https://w7.pngwing.com/pngs/621/196/png-transparent-e-commerce-logo-logo-e-commerce-electronic-business-ecommerce-angle-text-service.png' alt='E-Commerce'/>
                        <div className="card-image-overly mt-3">
                        <span className='card-detail-badge'>NodeJs</span>
                        <span className='card-detail-badge'>ReactJs</span>
                        <span className='card-detail-badge'>ExpressJs</span>
                        <span className='card-detail-badge'>MongoDb</span>
                        </div>
                        <div className='card-body text-center'>
                            <div className='ad-title'>
                                <h5 className='text-uppercase'>
                                    web application website
                                </h5>
                            </div>
                            <a className='ad-btn' href='view'> View</a>
                        </div>
                    </div>
                </div>
            </div>
            </Jello>
        </div>
    </div>
    
    </>
  )
}

export default Projects;