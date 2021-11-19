import SubjectCard from "./Missions";
import {useEffect, useState} from "react";
import {httpGet, httpPost} from "../httpFuntions.js";
import './Jobs.css'
import {Link} from "react-router-dom";


const Jobs = () => {

    const [filtered, setFiltered] = useState(false)
    const [jobs, setJobs] = useState([])

    const [name, setName] = useState([])
    const [reward, setReward] = useState([])

    const clickFunction = () => {
        setFiltered(!filtered)
    }

    const getName = () => {
        return filtered ? "Dejar de filtrar" : "Filtrar"
    }

    let finalSubjects;

    if (filtered) {
        finalSubjects = jobs.filter((subject) => {
            return subject.approved > 10
        })
    } else {
        finalSubjects = jobs
    }

    const fetchJobs = () => {
        httpGet('api/jobs/')
            .then((res) => setJobs(res.data))
    }

    const createJob = () => {
        httpPost('api/jobs/', { name: name, reward: reward})
            .then(fetchJobs)
    }

    useEffect(fetchJobs, [])

    return <div className='general'>
        <div className="main-div">
            <form onSubmit={createJob}>
                <fieldset>
                    <legend>New Bounty</legend>
                    <div className="mb-3">
                        <label htmlFor="disabledTextInput" className="form-label">Name</label>
                        <input type="text" id="disabledTextInput" className="form-control" value={name}
                               onChange={(e) => setName(e.target.value) }/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="disabledTextInput" className="form-label">Reward</label>
                        <input type="text" id="disabledTextInput" className="form-control" value={reward}
                               onChange={(e) => setReward(e.target.value) }
                        />
                    </div>
                    <button type="submit" className="btn btn-primary">CREATE JOB</button>
                </fieldset>
            </form>
        </div>
        <div className="all-cards">
            {
                finalSubjects
                    .map((mapSubject) => {
                        return (
                            <SubjectCard subject={mapSubject}/>
                        )
                    })
            }
        </div>
        <div>
            <Link to={'/main/createjob'}><button className="createbutton">Create New Job</button></Link>
        </div>
    </div>
}

export default Jobs