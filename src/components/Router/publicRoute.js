import React from 'react';
import {Redirect, Route} from 'react-router-dom';
import {useTheme} from "@material-ui/core/styles";

const PublicRoute = ({component: Component, restricted, ...rest}) => {

    //const auth = ContextAuth();
    const theme = useTheme();


    return (

        <Route {...rest} render={props => (
            <Component {...props} />)}/>
    );
};

/*
 auth.state.isLoading ? <Spinner loading={true} color={theme.palette.primary.main}/> :
            auth.state.user != null ? <Redirect to={'/changePassword'}/> :
                <Route {...rest} render={props => (
                    <Component {...props} />)}/>
 */

export default PublicRoute;