import React from 'react';
import './about.css';
import shivam from './shivam.jpg';

function About() {
    return (
        <div id='container'>
            <h2>About Me</h2>
            <div className='box'>
                <p>I am pursuing b.tech in CSE from Gurukula Kangri Vishwavidyalaya. Currently I am in 2nd year. I can design frontend and backend for your startups, and company. I am very well educated in HTML5, CSS3, Javascript, React, Redux, Hooks, etc.</p>
                <div className='img-container'>
                    <img src={shivam} alt='shivam' height='300' width='300'/>
                </div>
            </div>
        </div>
    );
}

export default About;