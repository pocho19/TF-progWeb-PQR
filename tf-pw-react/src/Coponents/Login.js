import './Login.css';
import {useState} from "react";
import {httpPost} from "../httpFuntions";
import {useHistory} from 'react-router-dom'

const Login = () => {

    const [username, setUsername] = useState()
    const [password, setPassword] = useState()

    const history = useHistory();

    const login = (e) => {
        e.preventDefault()
        httpPost('api/login/', {username: username, password: password}).then((res) => {
            localStorage.setItem('token', res.data.access)
            history.push('/main')
        })
    }

    return (
        <div className='login-screen'>
            <div className='welcome-text-container'><h1>User Access</h1></div>
            <form className='form-container' onSubmit={login}>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label">User Login </label>
                    <input
                        className="form-control"
                        id="exampleFormControlInput1"
                        placeholder="user@mail.com"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlTextarea1" className="form-label">Password </label>
                    <input
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        type="password"
                        className="form-control"
                        id="exampleFormControlInput1"
                        placeholder="Password" />
                </div>
                <div className={'button-container'}>
                    <button type="submit" className="btn btn-primary">AUTHENTICATE</button>
                </div>
            </form>
        </div>
)
}

export default Login
