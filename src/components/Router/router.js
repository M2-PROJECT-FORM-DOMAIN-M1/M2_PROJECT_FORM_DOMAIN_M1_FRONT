import React from "react";
import {BrowserRouter, Switch} from "react-router-dom";
import axios from "axios";
import HomePage from "../HomePage/homePage";
import PublicRoute from "./publicRoute";
import WebFont from "webfontloader";

export default function Router() {
    axios.defaults.baseURL = process.env.REACT_APP_BACK_URL

    React.useEffect(() => {
        WebFont.load({
            google: {
                families: ['Montserrat', 'Poppins']
            }
        })
    }, [])


    return (

        <BrowserRouter>
            <Switch>
                <PublicRoute component={HomePage} path="/" exact/>

            </Switch>
        </BrowserRouter>

    )
}