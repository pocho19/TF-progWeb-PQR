import './Missions.css';
import pgimg from "./mission.png";
import "./Jobs";
import { httpPatch } from '../httpFuntions';
import { httpDelete} from '../httpFuntions';


function SubjectCard ({subject}) {

    const claimBounty = () => {
        httpPatch('api/jobs/' + subject.id + "/", {name: subject.name, reward: subject.reward, desc: subject.desc, finished: true})
        .then(refreshPage)
    }
    const noBounty = () => {
        httpDelete('api/jobs/' + subject.id + "/")
        .then(refreshPage)
    }

    const refreshPage = () => {
        window.location.reload();
    }

    const finished = () => {
        if (subject.finished)
        return "Yes"
        else return "No"
    }
    return (
        <div className="card-container-custom">
            <div className="card">
                <img src={pgimg} className="picture" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">Target: {subject.name}</h5>
                    <p className="card-text">Conditions: {subject.desc}</p>
                    <p className="card-text">Reward: {subject.reward}</p>
                    <p className="card-text">Bounty Claimed: {finished(subject)}</p>
                    <button type="submit" className="btn btn-primary" onClick={claimBounty}>CLAIM BOUNTY</button>
                    <button type="submit" className="btn btn-primary" onClick={noBounty}>DELETE BOUNTY</button>
                </div>
            </div>
        </div>
    )
}
export default SubjectCard