import React from "react";
import {BrowserRouter, Switch} from "react-router-dom";
import PrivateRoute from "./privateRoute";
import PublicRoute from "./publicRoute";


export default function Router() {


    return (

        <BrowserRouter>
            <Switch>

            </Switch>
        </BrowserRouter>

    )
}