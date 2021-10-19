import React from "react";
import {BrowserRouter, Switch} from "react-router-dom";
import axios from "axios";
import HomePage from "../HomePage/homePage";
import PublicRoute from "./publicRoute";
export default function Router() {
    axios.defaults.baseURL = process.env.REACT_APP_BACK_URL

    return (

        <BrowserRouter>
            <Switch>
                <PublicRoute component={HomePage} path="/" exact/>

            </Switch>
        </BrowserRouter>

    )
}