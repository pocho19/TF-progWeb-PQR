
const Login = () => {
    return <div>
        <div className="main">
            <form action="action_page.php" method="post">
                <div className="imgcontainer">
                    <img src="tf-pw-react/src/images/login.png" alt="Login" className="avatar" />
                </div>

                <div className="container">
                    <label htmlFor="uname"><b style="color: white;">Usuario</b></label>
                    <input type="text" placeholder="Ingrese Usuario" name="uname" required>

                        <label htmlFor="psw"><b style="color: white;">Constraseña</b></label>
                        <input type="password" placeholder="Ingrese Contraseña" name="psw" required />

                            <button type="submit">Login</button>
                            <label style="color: white;">
                                <input type="checkbox" checked="checked" name="remember" > Recordarme </input>
                            </label>
                </div>

                <div className="container" style="background-color:#6d7276">
                    <button type="button" className="cancelbtn">Cancelar</button>
                    <span className="psw"><a href="#">Recuperar contraseña</a></span>
                </div>
            </form>
        </div>
    </div>
}

export default Login
