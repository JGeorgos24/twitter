import React from "react";

const Profile = (props) => {
    return(
        <div>
            <h2> Profile Page </h2>
            <h4>{props.userData.username}</h4>
            <p>{props.userData.bio}</p>
        </div>
    )
}

export default Profile;