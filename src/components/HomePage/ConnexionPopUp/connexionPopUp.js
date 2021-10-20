import React from 'react';
import {useStyle} from "./style";
import {Typography} from "@mui/material";
import TextField from "@mui/material/TextField";
import {Grid} from "@material-ui/core";
import Button from "@mui/material/Button";

export default function ConnexionPopUp() {

    const classes = useStyle();


    const sendCredentials =(e)=>{
        e.preventDefault()
    }


    return (

        <div className={classes.root}>
            <Typography variant="h4" component="h2" className={classes.title}>Connexion </Typography>
            <form onSubmit={sendCredentials}>

                <Grid container spacing={2} className={classes.containerGrid} justifyContent={"center"}>
                    <Grid item xs={12}>
                        <TextField label="Username" name="username" variant="outlined" placeholder="Username"
                                   className={classes.textFieldUsername}/>
                    </Grid>
                    <Grid item xs={12}>

                        <TextField label="Password" type={"password"} name="code" variant="outlined"
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
