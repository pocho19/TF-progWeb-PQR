
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
import Jobs from "./Coponents/Jobs";
import Createaccount from './Coponents/Createaccount';
import CreateJob from "./Coponents/CreateJob";

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
                        <Route exact={true} path={`/main/createjob`}>
                            <CreateJob />
                        </Route>
                        <Route exact={true} path={'/main/login'}>
                            <Login />
                        </Route>
                    </Route>
                    <Route exact={true} path={'/createaccount'}>
                            <Navbar />
                            <Createaccount />
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