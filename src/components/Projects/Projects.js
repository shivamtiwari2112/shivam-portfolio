import React from 'react';
import './projects.css';
import pro1 from './img/pro1.JPG';
import pro2 from './img/pro2.JPG';


function Projects() {
    return (
        <div id='project'>
            <h2 style={{textAlign: 'center', padding: '20px', fontSize: '2em'}}>Main Projects</h2>
            <section id='project-grid'>
                <div className='grid-box'>
                    <img src={pro1} alt='project1'/>
                    <div className='about-project'>
                        <h5>RoboFriends</h5>
                        <p>React</p>
                        <p>This RoboFriend app is made by using React, It is a simple app fetching data from a API and displaying asynchronously.</p>
                        <p className='project-btn'>
                            <a href='https://github.com/shivamtiwari2112/robofriends' rel='noreferrer' target='_blank'>Github</a>
                            <a href='https://shivamtiwari2112.github.io/robofriends/' rel='noreferrer' target='_blank'>See Live</a>
                        </p>
                    </div>
                </div>
                <div className='grid-box'>
                    <img src={pro2} alt='project1'/>
                    <div className='about-project'>
                        <h5>Smart Brain</h5>
                        <p>React</p>
                        <p>As it name suggests, This app can detect faces of the images. Machine Learning API is used. It has also backend which store user information.</p>
                        <p className='project-btn'>
                            <a href='https://github.com/shivamtiwari2112/smart-brain' rel='noreferrer' target='_blank'>Github</a>
                            <a href='https://face-recognition-brain-smart.herokuapp.com/' rel='noreferrer' target='_blank'>See Live</a>
                        </p>
                    </div>
                </div>
                
            </section>
        </div>
    );
}

export default Projects;