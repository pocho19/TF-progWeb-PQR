import SubjectCard from "./Missions";
import {useEffect, useState} from "react";
import {httpGet, httpPost} from "../httpFuntions.js";
import './Jobs.css'
import {Link} from "react-router-dom";


const Jobs = () => {

    const [filtered, setFiltered] = useState(false)
    const [courses, setCourses] = useState([])

    const [name, setName] = useState([])
    const [description, setDescription] = useState([])


    const subjects = [
        { name: 'Jonh Wick', description: 'reward: 12000'} ,
        { name: 'Pocho', description: 'reward: 500'} ,
        { name: 'Lobato ', description: 'reward: 5000'}
    ]

    const clickFunction = () => {
        setFiltered(!filtered)
    }

    const getName = () => {
        return filtered ? "Dejar de filtrar" : "Filtrar"
    }

    let finalSubjects;

    if (filtered) {
        finalSubjects = courses.filter((subject) => {
            return subject.approved > 10
        })
    } else {
        finalSubjects = courses
    }

    const fetchCourses = () => {
        httpGet('api/courses/')
            .then((res) => setCourses(res.data))
    }

    const createCourse = () => {
        httpPost('api/courses/', { name: name, description: description})
            .then(fetchCourses)
    }

    useEffect(fetchCourses, [])

    return <div className='general'>
        <div className="all-cards">
            {
                subjects
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