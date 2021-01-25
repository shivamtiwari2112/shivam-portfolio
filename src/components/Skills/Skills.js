import React from 'react';
import './skills.css';

function Skills() {
    return (
        <div>
            <section id='skills'>
                <div className='column-1'><p>Skills</p></div>
                <div className='column-2'>
                    <section id='skill-group'>
                        <div className='skill-set'>
                            <i className='fab fa-html5 fa-4x' style={{ color: '#e34c26' }}></i>
                            <p>HTML5</p>
                        </div>
                        <div className='skill-set'>
                            <i class="fab fa-css3 fa-4x" style={{ color: '#264de4' }}></i>
                            <p>CSS3</p>
                        </div>
                        <div className='skill-set'>
                            <i class="fab fa-js-square fa-4x" style={{ color: '#f0db4f' }}></i>
                            <p>JavaScript</p>
                        </div>
                        <div className='skill-set'>
                            <i class="fab fa-react fa-4x" style={{ color: 'blue' }}></i>
                            <p>React.js</p>
                        </div>
                        <div className='skill-set'>
                            <i class="fab fa-node fa-4x" style={{ color: '#026e00' }}></i>
                            <p>Node.js</p>
                        </div>
                        <div className='skill-set'>
                            <i class="fas fa-database fa-4x" style={{ color: 'rgb(51, 103, 145)' }}></i>
                            <p>PostregSQL</p>
                        </div>
                        <div className='skill-set'>
                            <i class="fas fa-server fa-4x" style={{ color: '#22b8cf' }}></i>
                            <p>Express.js</p>
                        </div>
                    </section>
                </div>
            </section>
        </div>
    );
}
export default Skills;