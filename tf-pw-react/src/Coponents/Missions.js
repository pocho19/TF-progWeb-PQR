import './Missions.css';
import pgimg from "./mission.png";
import {Link} from "react-router-dom";


function SubjectCard ({subject}) {

    return (
        <div className="card-container-custom">
            <div className="card">
                <img src={pgimg} className="picture" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">Name</h5>
                    <p className="card-text">
                        Here go the description
                    </p>
                    <Link to={`/main/courses/detail`}><a className="btn btn-primary">Ver más</a></Link>
                </div>
            </div>
        </div>
    )
}
export default SubjectCard