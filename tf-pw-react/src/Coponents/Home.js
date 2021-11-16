import Oper from './Operations.jpg.png';
import Memo from './Memories.jpg.png';
import {Link} from "react-router-dom";

const Home = () => {
    return <div>
        <div className="maindiv">

            <h1 className="customtitle">Squad 404</h1>
            <p className="description">Welcome to the command center</p>
        </div>

        <div className="contentsmain">

            <div className="contents">
            <Link to={'/main/jobs'}><h2 className="header-box">Operations</h2></Link>
                <div className="operation-contents">
                    <img src={Oper} className="picture" />
                        <p className="descriptive-text">
                            List of currently available jobs for your echelons to take on!
                        </p>
                </div>

            </div>


            <div className="contents">
                <h2 className="header-box">Memories</h2>
                <div className="operation-contents">
                    <img src={Memo} className="picture" />
                        <p className="descriptive-text">
                            Treasure the moments you share with those you want to protect
                        </p>
                </div>
            </div>
        </div>
    </div>
}
export default Home