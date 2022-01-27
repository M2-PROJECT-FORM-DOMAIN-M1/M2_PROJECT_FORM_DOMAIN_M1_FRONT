import React from 'react';
import {Route} from 'react-router-dom';

const PublicRoute = ({component: Component, restricted, ...rest}) => {




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