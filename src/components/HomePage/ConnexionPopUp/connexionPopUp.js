import React from 'react';
import {useStyle} from "./style";
import {Typography} from "@mui/material";
import TextField from "@mui/material/TextField";
import {Grid} from "@material-ui/core";
import Button from "@mui/material/Button";
import axios from "axios";
import {useUser} from "../../Context/userContect";
import {useDialog} from "../../Context/dialogContext";

export default function ConnexionPopUp() {

    const dialogContext = useDialog();
    const classes = useStyle();
    const userContext = useUser();

    const sendCredentials =(e)=>{
        e.preventDefault();
        const formData = new FormData(e.target);
        const formProps = Object.fromEntries(formData);

        axios.post("/auth/signin", formProps).then((res) => {
            if(res.status === 200){
                dialogContext.handleCloseDialog();
                userContext.dispatch(
                    {
                        type: 'signIn',
                        user:res.data.users,
                        token:res.data.accessToken
                    }
                )
            }

        }).catch((res)=>{
            console.log(res)
        })
    }


    return (

        <div className={classes.root}>
            <Typography variant="h4" component="h2" className={classes.title}>Connexion </Typography>
            <form onSubmit={sendCredentials}>

                <Grid container spacing={2} className={classes.containerGrid} justifyContent={"center"}>
                    <Grid item xs={12}>
                        <TextField label="Username" name="usernameOrEmail" variant="outlined" placeholder="Username"
                                   className={classes.textFieldUsername}/>
                    </Grid>
                    <Grid item xs={12}>

                        <TextField label="Password" type={"password"} name="password" variant="outlined"
                                   placeholder="Password"
                                   className={classes.textFieldPassword}/>
                    </Grid>
                    <Grid item xs={12}>
                        <Button variant="contained" type={"submit"} className={classes.submitButton}>
                            Submit
                        </Button>
                    </Grid>
                </Grid>
            </form>
        </div>


    )


}
