import React from 'react';
import NavBar from '../NavBar';

const About = () => {
    return (
        <>
            <NavBar/>
        <div style={styles.container}>
            <h1 style={styles.heading}>About Us</h1>
            <div style={styles.content}>
                <div style={styles.founders}>
                    <h2>Our Founders</h2>
                    <p>Seth Spring - <a href="https://github.com/sethspr" style={styles.link}>GitHub</a></p>
                    <p>Nail Osmanli - <a href="https://github.com/Nadiroglu" style={styles.link}>GitHub</a></p>
                </div>
                <div style={styles.inspiration}>
                    <h2>Inspiration</h2>
                    <p>Seth Spring and Nail Osmanli worked tirelessly to create this social media platform. Their dedication and passion led to the birth of this platform.</p>
                    <p>They drew inspiration from Mohammad Hossain, whose achievements motivated them to pursue their dreams and create something meaningful.</p>
                </div>
            </div>
        </div>
        </>
    );
};

const styles = {
    container: {
        maxWidth: '900px',
        marginTop: '10px',
        margin: 'auto',
        padding: '40px',
        fontFamily: 'Arial, sans-serif',
        backgroundImage: 'url(https://source.unsplash.com/random/1600x900)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        borderRadius: '20px',
        boxShadow: '0 0 20px rgba(0, 0, 0, 0.3)',
        color: '#fff',
    },
    heading: {
        textAlign: 'center',
        fontSize: '3.5rem',
        margin: '20px 0',
        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
    },
    content: {
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        padding: '40px',
        borderRadius: '20px',
    },
    founders: {
        marginBottom: '40px',
    },
    inspiration: {
        marginBottom: '40px',
    },
    link: {
        color: '#fff',
        textDecoration: 'none',
    },
};

export default About;