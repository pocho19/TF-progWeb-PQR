import './Login.css';
import {useState} from "react";
import {httpPost} from "../httpFuntions";
import {useHistory} from 'react-router-dom'
import log from "./login.png";

const Login = () => {

    const [username, setUsername] = useState()
    const [password, setPassword] = useState()

    const history = useHistory();

    const login = (e) => {
        e.preventDefault()
        httpPost('api/login/', {username: username, password: password}).then((res) => {
            localStorage.setItem('token', res.data.access)
            history.push('/main/home')
        })
    }

    return (
        <div className='login-screen'>
            <img src={log} className="picture" />
            <form className='form-container' onSubmit={login}>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label">Correo Electronico </label>
                    <input
                        className="form-control"
                        id="exampleFormControlInput1"
                        placeholder="mi@correo.com.ar"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlTextarea1" className="form-label">Contraseña </label>
                    <input
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        type="password"
                        className="form-control"
                        id="exampleFormControlInput1"
                        placeholder="Contraseña" />
                </div>
                <div className={'button-container'}>
                    <button type="submit" className="btn btn-primary">Conectarse</button>
                </div>
            </form>
        </div>
)
}

export default Login
