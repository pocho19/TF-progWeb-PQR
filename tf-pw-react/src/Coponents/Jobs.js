import SubjectCard from "./Missions";
import {useEffect, useState} from "react";
import {httpGet, httpPost} from "../httpFuntions.js";
import './Jobs.css'
import {Link} from "react-router-dom";

const axios = require('axios');

const Jobs = () => {

    const [filtered, setFiltered] = useState(false)
    const [jobs, setJobs] = useState([])

    const [name, setName] = useState([])
    const [reward, setReward] = useState([])
    const [desc, setDesc] = useState([])

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

    const createJob = (e) => {
        e.preventDefault()
        httpPost('api/jobs/', {name: name, reward: reward, desc: desc})
            .then(fetchJobs())
    }

    useEffect(fetchJobs, [])

    return <div className='general'>
        <div className="main-div">
            <form onSubmit={createJob}>
                <fieldset>
                    <legend className="text">New Bounty</legend>
                    <div className="mb-3">
                        <label htmlFor="disabledTextInput" className="form-label text">Name </label>
                        <input type="text" id="disabledTextInput" className="form-control" value={name}
                               onChange={(e) => setName(e.target.value) }/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="disabledTextInput" className="form-label text">Description </label>
                        <input type="text" id="disabledTextInput" className="form-control" value={desc}
                               onChange={(e) => setDesc(e.target.value) }
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="disabledTextInput" className="form-label text">Reward </label>
                        <input type="text" id="disabledTextInput" className="form-control" value={reward}
                               onChange={(e) => setReward(e.target.value) }
                        />
                    </div>
                    <button type="submit" className="btn btn-primary">SET BOUNTY</button>
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