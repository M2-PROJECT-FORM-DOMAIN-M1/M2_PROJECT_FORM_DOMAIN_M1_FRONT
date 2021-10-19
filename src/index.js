import React from 'react';
import ReactDOM from 'react-dom';
import Router from "./components/Router/router";
import {SnackbarProvider} from "notistack";
import {DialogProvider} from "./components/Context/dialogContext";


ReactDOM.render(
    <React.StrictMode>
        <DialogProvider>
            <SnackbarProvider maxSnack={3}>
                <Router/>
            </SnackbarProvider>
        </DialogProvider>
    </React.StrictMode>,
    document.getElementById('root')
);

