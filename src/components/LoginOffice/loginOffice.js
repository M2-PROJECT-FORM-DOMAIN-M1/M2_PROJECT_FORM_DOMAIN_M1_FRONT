import React from 'react';
import {Login} from '@microsoft/mgt-react';
import useIsSignedIn from "../Utils/isOfficeUserSignedIn";
import {useSpinner} from "../Context/spinnerContext";
import axios from "axios";
import useQuery from "../Utils/useQuery";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import {useStyle} from "./style";

export default function LoginOffice(props) {

    const spinner = useSpinner();
    const [isSignedIn] = [true];
    const [formExist,setFormExist] =React.useState(false)
    let query = useQuery();
    const style = useStyle()


    React.useEffect(()=>{
        spinner.handleOpenSpinner()
        axios.post("/public/form/formExist", {
            code: query.get("code")
        })
            .then(function (response) {
                if (!response.data.exist || response.data.lock) {
                    window.location.replace("/");
                }else{
                    setFormExist(true)
                }
            })
            .catch(function (error) {
                window.location.replace("/");
            }).then(() => {
            spinner.handleCloseSpinner()
        })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])


    const handleLogin = () => {

        window.location.replace("/answerForm/"+  query.get("code"))

    }

    return (
        <>
            {
                isSignedIn === null || formExist === false?
                    <></>
                    :
                    isSignedIn === true ? window.location.replace("/answerForm/"+  query.get("code")) :
                        <div  className={style.root}>
                            <Paper className={style.paper}>
                                <Typography className={style.text}>
                                   To continue you have to sign in
                                </Typography>
                                <Login className={style.login} loginCompleted={(e) => handleLogin()}/>
                            </Paper>
                        </div>


            }
        </>
    )


}

