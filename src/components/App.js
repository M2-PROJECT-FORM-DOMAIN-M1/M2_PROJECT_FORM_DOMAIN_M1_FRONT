import React from "react";
import {ThemeProvider} from "@mui/private-theming";
import {SpinnerProvider} from "./Context/spinnerContext";
import {UserProvider} from "./Context/userContact";
import {SnackbarProvider} from "notistack";
import {DialogProvider} from "./Context/dialogContext";
import Router from "./Router/router";
import {createTheme} from "@mui/material/styles";
import CloseIcon from '@mui/icons-material/Close';
import {useStyle} from "./style";

export default function App(){
    const style = useStyle();

    const theme = createTheme({});


    const notistackRef = React.createRef();
    const onClickDismiss = key => () => {
        notistackRef.current.closeSnackbar(key);
    }

    return(
        <ThemeProvider theme={theme}>
            <SpinnerProvider>
                <UserProvider>
                    <SnackbarProvider
                        ref={notistackRef}
                        maxSnack={3}
                        autoHideDuration={4000}
                        action={(key) => (
                            <CloseIcon className={style.buttonSnackbar}  onClick={onClickDismiss(key)}>
                                Close
                            </CloseIcon>
                        )}
                    >
                        <DialogProvider>
                            <Router/>
                        </DialogProvider>
                    </SnackbarProvider>
                </UserProvider>
            </SpinnerProvider>
        </ThemeProvider>
    )

}