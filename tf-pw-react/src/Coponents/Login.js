import './Login.css';

const Login = () => {
    return <div>
        <div className="main">
            <form action="action_page.php" method="post">
                <div className="imgcontainer">
                    <img src="tf-pw-react/src/images/login.png" alt="Login" className="avatar" />
                </div>

                <div className="containerLogin">
                    <div>
                        <div>
                            <label htmlFor="uname"><b className="custom-text">Usuario </b></label>
                            <input type="text" placeholder="Ingrese Usuario" name="uname" required />
                        </div>
                        <div>
                            <label htmlFor="psw"><b className="custom-text">Constraseña </b></label>
                            <input type="password" placeholder="Ingrese Contraseña" name="psw" required />
                        </div>
                        <div>
                            <button type="submit">Login</button>
                            <label className="custom-button"> Recordarme</label>
                            <input type="checkbox" checked={true} name="remember"></input>
                        </div>
                    <div className="cancelar">
                        <button type="button" className="cancelbtn">Cancelar</button>
                        <span className="psw"><a href="#">Crear Usuario</a></span>
                    </div>
                    </div>
                </div>
            </form>
        </div>
    </div>
}

export default Login
