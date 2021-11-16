
import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import Navbar from "./Coponents/Navbar";
import Home from "./Coponents/Home";
import Profile from "./Coponents/Profile";
import Login from "./Coponents/Login";
<<<<<<< HEAD
import Courses from "./Coponents/Jobs";
import Createaccount from './Coponents/Createaccount';
=======
import Jobs from "./Coponents/Jobs";
>>>>>>> d5b51a0e74e0ed2e62233d150ffc99e86ba8c040

function App() {

    return (
        <Router>
            <div>
                <Switch>
                    <Route path="/main">
                        <Navbar />
                        <Route exact={true} path={`/main/home`}>
                            <Home />
                        </Route>
                        <Route exact={true} path={`/main/profile`}>
                            <Profile />
                        </Route>
                        <Route exact={true} path={`/main/jobs`}>
                            <Jobs />
                        </Route>
                        <Route exact={true} path={'/main/login'}>
                            <Route exact={true} path={'/main/login/createaccount'}>
                                <Createaccount />
                            </Route>
                            <Login />
                        </Route>
                    </Route>
                    <Route path="*">
                        <div><h1>404</h1></div>
                    </Route>
                </Switch>
            </div>
        </Router>
    )
}

export default App;