import React from 'react';
import logo from '../images/logo192.png'
import '../styles/mainPage.css';
import imgWecome from '../images/welcome.jpeg'
import Login from './Login';

const MainPage = () => {
    return (
        <div className='main'>
            <div className='header'>
                <div className='img-container'>
                    <img src={logo} alt='logo' />
                </div>
                <div className='button-container'>
                    <button className='login-button'>Login</button>
                    <button className='register-button'>Registro</button>
                </div>

            </div>
            <div className='welcome'>
                <div className='msj-continer'>
                    <h1>Ayudanos con una encuesta</h1>
                    <p>Para mejorar con nuestro producto</p>
                </div>
                <div className='imgWelcome-continer'>
                    <img src={imgWecome} alt='Welcome'></img>
                </div>
            </div>
        </div>
    );
};

export default MainPage;