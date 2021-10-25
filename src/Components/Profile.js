import React, { useState } from "react";
import {BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"

const Profile = props => {

    

    return(
        <div>
            <p>{props.user}</p>
        </div>
    )
    }


export default Profile;