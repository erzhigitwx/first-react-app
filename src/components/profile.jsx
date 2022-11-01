import avatar from "../picture/avatar.png"
import React from 'react';
const Profile = function () {
    return(
        <div id="profile_info">
            <img className="avatar" src={avatar} />

            <p className="profile_text">Good day to all! This is my small pet-project written in JavaScript with the React library. I did the design myself, so don't pay much attention. In the near future, there will be high-quality works with various functionality and suitability. Thanks for your attention!</p>
        </div>
    );
  };


export default Profile;