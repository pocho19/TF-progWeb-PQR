import './Profile.css';
import {useEffect, useState} from "react";
import {httpGet} from "../httpFuntions";

const Profile = () => {
    const [userData, setUserData] = useState({})

    useEffect(() => {
        httpGet('api/me').then((res) => setUserData(res.data))
    }, [])

    return <div>
        <div className="container">
            <div className="profilepic">PIC</div>

            <div className="column">
                <p className="name">{userData.username}</p>
                <p className="about">Electronic warfare specialist</p>
            </div>
        </div>

        <div className="container">
            <div className="column data">
                <div>ALIAS: Scheibe</div>
                <div>GENDER: Female</div>
                <div>DOB: 05/17/1997</div>
            </div>

            <div className="column">
                <div>NATIONALITY: German</div>
                <div>HEIGHT: 5'4</div>
                <div>RACE: Droid</div>
            </div>
        </div>

        <div className="column">
            <h3 className="subtitle">Track Record</h3>
            <ul>
                <li>Date: xxxxxx | Country: xxxx | Description: xxxx | Code: xxxxx | Term: xxxxx</li>
                <li>Date: xxxxxx | Country: xxxx | Description: xxxx | Code: xxxxx | Term: xxxxx</li>
                <li>Date: xxxxxx | Country: xxxx | Description: xxxx | Code: xxxxx | Term: xxxxx</li>
            </ul>
        </div>
    </div>
}

export default Profile