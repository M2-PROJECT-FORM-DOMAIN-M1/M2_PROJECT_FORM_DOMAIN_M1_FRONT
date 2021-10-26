import React from "react";
import {BrowserRouter, Switch} from "react-router-dom";
import axios from "axios";
import HomePage from "../HomePage/homePage";
import PublicRoute from "./publicRoute";
import WebFont from "webfontloader";
import PrivateRoute from "./privateRoute";
import DashboardSuperAdmin from "../SuperAdmin/dashboard";
import DashboardAdmin from "../Admin/dashboard";

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
                <PrivateRoute userAccept={"ROLE_SUPER_ADMIN"} component={DashboardSuperAdmin} path={"/SuperAdmin"} routeRedirect={"/"} exact/>
                <PrivateRoute userAccept={"ROLE_ADMIN"} component={DashboardAdmin} path={"/Admin"} routeRedirect={"/"} exact/>

            </Switch>
        </BrowserRouter>

    )
}