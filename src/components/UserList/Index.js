import React from 'react';
import  Navbar from "../NavBar/Index";
import  Leftbar from "../LeftBar/Index";
import UserDatabase from '../UserDatabase/Index';
import {Redirect} from 'react-router-dom';
function Userlist({authorized}) {
    if (!authorized) {
    return     <Redirect to="/"/>;
    }
    return (
        <div>
            <Navbar/>
            <Leftbar/>
            <UserDatabase/>
        </div>
    )
}

export default Userlist;
