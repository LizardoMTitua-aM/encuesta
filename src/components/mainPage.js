import React from 'react';
import logo from '../images/logo192.png'
import '../styles/mainPage.css';
import imgWecome from '../images/welcome.jpeg'
import appFirebase from '../tokens/credenciales';
import {getAuth, signOut} from 'firebase/auth';
const  auth = getAuth(appFirebase);

const MainPage = ({mailUser}) => {
    return (
        <div className='main'>
            <div className='header'>
                <div className='img-container'>
                    <img src={logo} alt='logo' />
                </div>
                <div className='user-container'>
                    <h1>Bienvenido</h1>
                    <p>{mailUser}</p>
                    <button onClick={()=>signOut(auth)}>Cerrar Sesion</button>
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