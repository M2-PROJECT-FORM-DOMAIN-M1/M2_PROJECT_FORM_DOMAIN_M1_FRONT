import React from 'react';
import ReactDOM from 'react-dom';
import App from "./components/App";
import {Providers} from '@microsoft/mgt-element';
import {Msal2Provider} from '@microsoft/mgt-msal2-provider';

Providers.globalProvider = new Msal2Provider({
    clientId: process.env.REACT_APP_ID_APPLICATION_AZURE
});


ReactDOM.render(
    <App/>
    ,
    document.getElementById('root')
);

