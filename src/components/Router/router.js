import React from "react";
import {BrowserRouter, Switch} from "react-router-dom";
import axios from "axios";
import HomePage from "../HomePage/homePage";
import PublicRoute from "./publicRoute";
import WebFont from "webfontloader";
import PrivateRoute from "./privateRoute";
import DashboardSuperAdmin from "../SuperAdmin/dashboardSuperAdmin";
import {useUser} from "../Context/userContact";
import DashboardAdmin from "../Admin/dashboardAdmin";
import AnswerForm from "../AnswerForm/answerForm";
import LoginOffice from "../LoginOffice/loginOffice";

export default function Router() {
    axios.defaults.baseURL = process.env.REACT_APP_BACK_URL

    React.useEffect(() => {
        WebFont.load({
            google: {
                families: ['Montserrat', 'Poppins']
            }
        })
    }, [])

    const userContext = useUser();
    axios.interceptors.response.use(config => {

        if (config.headers["expired-token"] === "true") {
            userContext.dispatch(
                {
                    type: 'signOut',
                }
            )
        }
        return config
    }, function (error) {

        return Promise.reject(error);
    });




    return (

        <BrowserRouter>
            <Switch>
                <PublicRoute component={HomePage} path="/" exact/>
                <PrivateRoute userAccept={"ROLE_SUPER_ADMIN"} component={DashboardSuperAdmin} path={"/superAdmin"} routeRedirect={"/"} exact/>
                <PrivateRoute userAccept={"ROLE_ADMIN"} component={DashboardAdmin} path={"/admin"} routeRedirect={"/"} exact/>
                <PublicRoute component={AnswerForm} path="/answerForm/:code" exact/>
                <PublicRoute component={LoginOffice} path="/loginOffice" exact/>
                <PublicRoute component={HomePage} path="/*"/>
            </Switch>
        </BrowserRouter>

    )
}