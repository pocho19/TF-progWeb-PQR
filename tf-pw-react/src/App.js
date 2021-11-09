import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import Navbar from "./Coponents/Navbar";
import Home from "./Coponents/Home";
import Profile from "./Coponents/Profile";

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