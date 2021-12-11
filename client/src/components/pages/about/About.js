import React from 'react'
import './about.css'
import Footer from '../../footer/Footer'

function About() {
    return (
        <div className="about">
        <div className="aboutWrapper">
            <h3>About the <span>Exquisitart</span> Article media app</h3>
            <div className="aboutContent">
                <div className="containerContent">
                    <h6>Mission</h6>
                    <p>To create a network that connect people to share their creative work, encouragement and any other relevant post.
                    We bring you into a platform where you expose your talents to the world.
                     </p>
                </div>
                <div className="containerContent">
                                   <h6>Vision</h6>
                    <p>To Empower talents and provide a platform to show the wolrd what you can do. To create an avenue for fun, reliving stress and connecting with knowledge. The vision of the organizations is also to create a platform where people can sell their services to others.
                     </p>
                </div>
                <div className="containerContent">
                                   <h6>Value</h6>
                    <p>Transparency</p>
                    <p>Commitment to make your life easy</p>
                    <p>24/7 hour support to exquisitart app users</p>
                    <p>Networking our app users</p>
                </div>
            </div>
            <p className="aboutFooter"><b>Developer:</b> Arthur Mwangi</p>
            <p className="aboutFooter"><b>Email:</b> exquisitartservices@gmail.com</p>
            </div>
            <Footer/>
        </div>
    )
}

export default About
