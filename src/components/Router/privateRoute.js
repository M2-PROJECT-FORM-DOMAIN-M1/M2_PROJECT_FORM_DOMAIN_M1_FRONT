import React from 'react';
import {Redirect, Route} from 'react-router-dom';

import {useTheme} from "@material-ui/core/styles";


const PrivateRoute = ({component: Component, userAccept, routeRedirect, ...rest}) => {

    const theme = useTheme();
    //const auth = ContextAuth();


    return (
        <div>

        </div>
    );
};

/*
  <Route {...rest} render={props => (
            auth.state.isLoading ? <Spinner loading={true} color={theme.palette.primary.main}/>
                :
                auth.state.user === null ? <Redirect to={routeRedirect}/> :
                    location.pathname!='/changePassword' ? <Redirect to={'/changePassword'}/> :
                        userAccept.includes(auth.state.user.type) ?
                            <Component {...props} />
                            : <Redirect to={routeRedirect}/>
        )}/>
 */

export default PrivateRoute;