import React from "react";
import {BrowserRouter, Switch} from "react-router-dom";
import axios from "axios";

export default function Router() {
    axios.defaults.baseURL = process.env.REACT_APP_BACK_URL





    return (

        <BrowserRouter>
            <Switch>

            </Switch>
        </BrowserRouter>

    )
}