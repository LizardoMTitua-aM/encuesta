import React from "react";
import { useState } from "react";
import "../styles/Login.css";
import imgLogin from "../images/login.jpeg";
import appFirebase from "../tokens/credenciales";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const auth = getAuth(appFirebase);

function Login() {

    const [register, setRegister] = useState(false);
    const provider = new GoogleAuthProvider();
    const functionAutentication = async (e) => {
        e.preventDefault();
        const mail = e.target.mail.value;
        const password = e.target.password.value;
        try {
            if (register) {
                try {
                    await createUserWithEmailAndPassword(auth, mail, password);
                } catch (error) {
                    alert("Usuario ya registrado");
                }
            }
            else {
                try {
                    await signInWithEmailAndPassword(auth, mail, password);
                } catch (error) {
                    alert("Usuario o contraseña incorrecta");
                }
            }
        }
        catch (error) {
            console.log(error);
        }
    };
    function googleAuth() {
        signInWithPopup(auth, provider)
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                // The signed-in user info.
                const user = result.user;
                // IdP data available using getAdditionalUserInfo(result)
                // ...
            }).catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                // The email of the user's account used.
                const email = error.customData.email;
                // The AuthCredential type that was used.
                const credential = GoogleAuthProvider.credentialFromError(error);
                // ...
            });
    }



    return (
        <div className="login">
            <div className="msj-login">
                <h1>{register ? "Registrate" : "Inicia Sesion"}</h1>
                <p>{register ? "Bienvenido" : "Bienvenido de Nuevo"}</p>
            </div>
            <div className="login-container">
                <div className="card-login">
                    <form onSubmit={functionAutentication}>
                        <input type="text" placeholder="Ingrese el Usuario" id="mail" />
                        <br />
                        <input type="password" placeholder="Ingrese su contaseña" id="password" />
                        <button type="submit" className="btnGoogle" onClick={googleAuth}>
                        <i class="material-icons"></i>
                        Inicia Sesion con Google</button>
                        <button type="submit" className="btnLogin">{register ? "Registro" : "Inicio Sesion"}</button>
                        <p>{register ? "Si ya tienes cuenta  " : "No tines Cuenta  "}<button className="btnSwitch" type="submit" onClick={() => setRegister(!register)}>{register ? "Inicia Sesion" : "Registrate"}</button></p>
                    </form>

                </div>
                <div className="img-login">
                    <img src={imgLogin} alt="Login" />
                </div>
            </div>
        </div>
    );
}

export default Login;