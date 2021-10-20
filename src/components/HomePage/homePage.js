import React from "react"
import {useStyle} from "./style"
import {Typography} from "@mui/material"
import PersonIcon from '@mui/icons-material/Person'
import TextField from '@mui/material/TextField'

import axios from "axios"
import Button from '@mui/material/Button';
import {useDialog} from "../Context/dialogContext";
import ConnexionPopUp from "./ConnexionPopUp/connexionPopUp";

export default function HomePage() {

    const dialogContext = useDialog();

    const style = useStyle();

    React.useEffect(() => {
        dialogContext.handleOpenDialog(<ConnexionPopUp/>)
    }, [])


    const sendCode = (e) => {
        e.preventDefault()
        const formData = new FormData(e.target);
        const formProps = Object.fromEntries(formData);
        axios.post("getCode", formProps).then((res) => {
            console.log(res)
        })
    }

    return (
        <div className={style.root}>
            <Typography variant="h3" component="h1" className={style.title}>ISEN FORM</Typography>

            <div className={style.ConnectionTitle}>
                <PersonIcon fontSize="medium" className={style.iconPerson}/>
                <Typography variant="h6" component="h2">Connection</Typography>
            </div>

            <div className={style.code}>
                <Typography variant="h4 " component="h2">Please enter a code </Typography>
                <form onSubmit={sendCode} className={style.formCode}>
                    <TextField name="code" id="CodeField" variant="outlined" placeholder="Code"
                               className={style.textFieldCode}/>
                    <div className={style.containerButtonSubmit}>
                        <Button variant="contained" type={"submit"} className={style.submitButton}>
                            Submit
                        </Button>
                    </div>

                </form>
            </div>
        </div>
    )
}