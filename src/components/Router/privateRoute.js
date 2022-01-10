import React from 'react';
import {Redirect, Route} from "react-router-dom";
import axios from "axios";
import {useSpinner} from "../Context/spinnerContext";
import {useUser} from "../Context/userContact";


const PrivateRoute = ({component: Component, userAccept, routeRedirect, ...rest}) => {

    const spinnerContext = useSpinner();
    const userContext = useUser();
    const [isLoading, setIsLoading] = React.useState(true)

    console.log(routeRedirect)

    React.useEffect(() => {
        spinnerContext.handleOpenSpinner()
        axios.post("/auth/isConnected").then((res) => {

            userContext.dispatch(
                {
                    isConnected: true,
                    type: 'checkConnection',
                    user: res.data.users,
                }
            )
            spinnerContext.handleCloseSpinner()
            setIsLoading(false)
        }).catch((res) => {
            userContext.dispatch(
                {
                    isConnected: false,
                    type: 'checkConnection',
                }
            )
            spinnerContext.handleCloseSpinner()
            setIsLoading(false)
            window.location.replace(process.env.REACT_APP_FRONT_URL);
        })
    }, [])
    return (
        <Route {...rest} render={props => (
            isLoading ? "" :
                userContext.state.isConnected ?
                    userAccept.includes(userContext.state.user.authority) ? <Component {...props} />
                        : <Redirect to={routeRedirect}/>
                    :
                    <Redirect to={routeRedirect}/>
        )}/>


    );
};


export default PrivateRoute;