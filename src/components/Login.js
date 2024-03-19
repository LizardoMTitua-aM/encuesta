import React from "react";
import { useState } from "react";
import "../styles/Login.css";
import imgLogin from "../images/login.jpeg";

function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Perform login logic here
        console.log("Username:", username);
        console.log("Password:", password);
    };

    return (
        <div className="login">
            <div className="msj-login">
                <h1>Login</h1>
                <p>Bienvenido de nuevo</p>
            </div>
            <div className="login-container">
                <div className="card-login">
                    <form onSubmit={handleSubmit}>
                        <input type="text" placeholder="Ingrese el Usuario" value={username} onChange={handleUsernameChange} />
                        <br />
                        <input type="password" placeholder="Ingrese su contaseña" value={password} onChange={handlePasswordChange} />
                        <br />
                        <button type="submit">Login</button>
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