import './Createaccount.css';
import {useState} from "react";
import {httpPost} from "../httpFuntions";
import {Link, useHistory} from "react-router-dom";

const Createaccount = () => {
    const [username, setUsername] = useState()
    const [password, setPassword] = useState()

    const Create = (e) => {
        e.preventDefault()
        httpPost('api/register/', {username: username, password: password}).then((res) => {
            localStorage.setItem('token', res.data.access)
            history.push('/main/login')
        })
    }

    const history = useHistory();

    return <div>
        <div className="main">
            <form action="action_page.php" method="post" onSubmit={Create}>
                <div className="containerAccount">
                    <div>
                        <div>
                            <label htmlFor="uname"><b className="custom-text">Login Name </b></label>
                            <input
                                className="form-control"
                                id="exampleFormControlInput1"
                                placeholder="username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                        </div>
                        <div>
                            <label htmlFor="psw"><b className="custom-text">Password </b></label>
                            <input
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                type="password"
                                className="form-control"
                                id="exampleFormControlInput1"
                                placeholder="password" />
                        </div>
                        <div>
                            <label htmlFor="psw"><b className="custom-text">Repeat Password </b></label>
                            <input type="password" placeholder="password" name="psw" required />
                        </div>
                        <div>
                            <button type="submit">Create Access</button>
                        </div>
                    <div className="cancelar">
                        <Link to={"/main/home"}><button type="button" className="cancelbtn">Cancel</button></Link>
                    </div>
                    </div>
                </div>
            </form>
        </div>
    </div>
}

export default Createaccount