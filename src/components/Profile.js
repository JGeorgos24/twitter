import React from "react";
import {Link} from 'react-router-dom';

const Profile = (props) => {
    return(
        <div>
            <h2> Profile Page </h2>
            <h4>{props.userData.username}</h4>
            <p>{props.userData.bio}</p>
            <Link to="/tweet/new"> Compose a Tweet </Link>
        </div>
    )
}

export default Profile;