import './Missions.css';
import pgimg from "./mission.png";
import {Link} from "react-router-dom";
import "./Jobs";
import { httpPatch } from '../httpFuntions';
import { httpDelete} from '../httpFuntions';
import fetchJobs from './Jobs.js';


function SubjectCard ({subject}) {

    const claimBounty = () => {
        httpPatch('api/jobs/' + subject.id + "/", {name: subject.name, reward: subject.reward, desc: subject.desc, finished: true})
        .then(fetchJobs())
    }
    const noBounty = () => {
        httpDelete('api/jobs/' + subject.id + "/")
        .then(refreshPage)
    }

    const refreshPage = () => {
        window.location.reload();
    }

    return (
        <div className="card-container-custom">
            <div className="card">
                <img src={pgimg} className="picture" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">Target: {subject.name}</h5>
                    <p className="card-text">Conditions: 
                        {subject.desc}
                    </p>
                    <p className="chard-text">Reward: 
                        {subject.reward}
                    </p>
                    <button type="submit" className="btn btn-primary" onClick={claimBounty}>CLAIM BOUNTY</button>
                    <button type="submit" className="btn btn-primary" onClick={noBounty}>DELETE BOUNTY</button>
                </div>
            </div>
        </div>
    )
}
export default SubjectCard