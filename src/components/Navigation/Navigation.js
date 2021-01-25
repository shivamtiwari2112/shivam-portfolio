import React from 'react';
import './navigation.css';

function Navigation () {
    return (
        <nav>
            <p><a href='/'>Shivam Kumar</a></p>
            <ul>
                <li><a href="/#container">About</a></li>
                <li><a href="/#project">Projects</a></li>
                <li><a href="/#skills">Skills</a></li>
                <li><a href="/#contact">Contact</a></li>
            </ul>
        </nav>
    );
}

export default Navigation;