import SubjectCard from "./Missions";
import {useEffect, useState} from "react";
import {httpGet, httpPost} from "../httpFuntions.js";


const Courses = () => {

    const [filtered, setFiltered] = useState(false)
    const [courses, setCourses] = useState([])

    const [name, setName] = useState([])
    const [description, setDescription] = useState([])


    const subjects = [
        { name: 'Jonh Wick', reward: 12000} ,
        { name: 'Pocho', reward: 1500} ,
        { name: 'Lobato ', reward: 2000}
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
    </div>
}

export default Courses