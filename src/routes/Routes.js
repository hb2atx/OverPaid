import React from 'react';
import { Routes as Route } from "react-router-dom";
import Homepage from '../components/Homepage';
import Profile from '../components/Profile';

function Routes () {
    return (
        <div>
            <Routes>
                <Route exact path="/">
                    <Homepage />
                </Route>
                <Route exact path="/profile">
                    <Profile />
                </Route>
            </Routes>
        </div>
    )
}

export default Routes;
