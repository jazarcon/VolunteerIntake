import React from 'react';
import './styles.css';
function NavBar() {
    return (
        <nav style={styles.container}>
            <h1>Table of Contents</h1>
            <ul>
                <li>Contact Information</li>
                <li>Motivation</li>
                <li>Skills Assessment</li>
                <li>Interest Assessment</li>
                <li>Availability</li>
                <li>Police Information Check</li>
                <li>Health and Safety</li>
            </ul>
        </nav>
    )
}

const styles = {
    container:{
        top:0,
        left:0,
        justifyContent:"space-between",
        position: "left",
        padding:"10px",
        width: "200px",
        height: "100%",
        overflow:'hidden',
        zIndex: 1,
    }
}

export default NavBar;
