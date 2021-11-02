import React from 'react';
import {useStyle} from "./style";
import {Typography} from "@mui/material";
import TextField from "@mui/material/TextField";
import {Grid} from "@material-ui/core";
import Button from "@mui/material/Button";
import axios from "axios";
import {useUser} from "../../Context/userContact";
import {useDialog} from "../../Context/dialogContext";
import {useSpinner} from "../../Context/spinnerContext";

export default function ConnexionPopUp() {

    const spinnerContext = useSpinner();
    const dialogContext = useDialog();
    const classes = useStyle();
    const userContext = useUser();

    const [errorConnection, setErrorConnection] = React.useState("")

    const [formConnectionError, setFormConnectionError] = React.useState({
        usernameOrEmail: "",
        password: "",
    })


    const sendCredentials = (e) => {
        setErrorConnection("")
        setFormConnectionError({
            usernameOrEmail: "",
            password: "",
        })
        e.preventDefault();
        const formData = new FormData(e.target);
        const formProps = Object.fromEntries(formData);

        let error = {
            usernameOrEmail: "",
            password: ""
        }

        let isError = false;
        for (const [key, value] of Object.entries(formProps)) {
            if (value === "") {
                isError = true;
                error[key] = "Field cannot be empty"
            }
        }
        if (isError) {
            setFormConnectionError(error)
        } else {
            spinnerContext.handleOpenSpinner();
            axios.post("/auth/signin", formProps).then((res) => {
                if (res.status === 200) {
                    dialogContext.handleCloseDialog();
                    userContext.dispatch(
                        {
                            type: 'signIn',
                            user: res.data.users,
                            tokenBearer: res.data.accessToken,
                        }
                    )

                    if(res.data.users.authority === "ROLE_SUPER_ADMIN"){
                        window.location.replace(process.env.REACT_APP_FRONT_URL+"SuperAdmin");
                    }else  if(res.data.users.authority === "ROLE_ADMIN"){
                        window.location.replace(process.env.REACT_APP_FRONT_URL+"Admin");
                    }

                }
                spinnerContext.handleCloseSpinner();
            }).catch((res) => {
                if(res.response){
                    setErrorConnection(res.response.data.message)
                }else{
                    setErrorConnection("Unable to connect")
                }
                spinnerContext.handleCloseSpinner();
            })


        }


    }


    return (

        <div className={classes.root}>
            <Typography variant="h4" component="h2" className={classes.title}>Connexion </Typography>
            <form onSubmit={sendCredentials}>

                <Grid container  className={classes.containerGrid} justifyContent={"center"}>
                    <Grid item xs={12}>
                        <TextField error={formConnectionError.usernameOrEmail !== ""}
                                   helperText={formConnectionError.usernameOrEmail !== "" ? formConnectionError.usernameOrEmail : ''}
                                   label="Username" name="usernameOrEmail" variant="outlined" placeholder="Username"
                                   className={classes.textFieldUsername}/>
                    </Grid>
                    <Grid item xs={12} className={classes.gridContainerPassword}>
                        <TextField error={formConnectionError.password !== ""}
                                   helperText={formConnectionError.password !== "" ? formConnectionError.password : ''}
                                   label="Password" type={"password"} name="password" variant="outlined"
                                   placeholder="Password"
                                   className={classes.textFieldPassword}/>
                    </Grid>
                    <Grid item xs={12} className={classes.gridContainerSubmit}>
                        <Button variant="contained" type={"submit"} className={classes.submitButton}>
                            Submit
                        </Button>
                    </Grid>
                </Grid>
            </form>
            <Typography className={classes.errorConnection} variant="body1" component="p" >{errorConnection !== "" ? errorConnection : ""} </Typography>

        </div>


    )


}
