import './Createaccount.css';

const Createaccount = () => {
    return <div>
        <div className="main">
            <form action="action_page.php" method="post">
                <div className="imgcontainer">
                    <img src="tf-pw-react/src/images/login.png" alt="Crear Cuenta" className="avatar" />
                </div>

                <div className="containerAccount">
                    <div>
                        <div>
                            <label htmlFor="uname"><b className="custom-text">Nuevo Usuario </b></label>
                            <input type="text" placeholder="Ingrese Usuario" name="uname" required />
                        </div>
                        <div>
                            <label htmlFor="psw"><b className="custom-text">Constraseña </b></label>
                            <input type="password" placeholder="Ingrese Contraseña" name="psw" required />
                        </div>
                        <div>
                            <label htmlFor="psw"><b className="custom-text">Repetir Contraseña </b></label>
                            <input type="password" placeholder="Ingrese Contraseña" name="psw" required />
                        </div>
                        <div>
                            <button type="submit">Crear Cuenta</button>
                        </div>
                    <div className="cancelar">
                        <button type="button" className="cancelbtn">Cancelar</button>
                    </div>
                    </div>
                </div>
            </form>
        </div>>
    </div>
}

export default Createaccount