import React from "react"
import {useStyle} from "./style"
import {Typography} from "@mui/material"
import PersonIcon from '@mui/icons-material/Person'
import TextField from '@mui/material/TextField'

import axios from "axios"
import Button from '@mui/material/Button';
import {useDialog} from "../Context/dialogContext";
import ConnexionPopUp from "./ConnexionPopUp/connexionPopUp";
import {useSpinner} from "../Context/spinnerContext";

export default function HomePage() {

    const dialogContext = useDialog();
    const spinner = useSpinner();
    const style = useStyle();
    const [formCodeError, setFormCodeError] = React.useState("")

    const showPopUpConnection = () => {
        dialogContext.handleOpenDialog({
            childrenDialog: <ConnexionPopUp/>,
            direction: "down"

        })
    }

    const sendCode = (e) => {
        e.preventDefault()
        spinner.handleOpenSpinner()
        const formData = new FormData(e.target);
        const formProps = Object.fromEntries(formData);
        setFormCodeError("")
        axios.post("/public/form/formExist", formProps)
            .then(function (response) {
                if (response.data.exist) {
                    window.location.replace("/loginOffice?code=" + formProps.code);
                } else {
                    setFormCodeError("the code does not exist")
                }
            })
            .catch(function (error) {
                setFormCodeError("An error occurred")
            }).then(() => {
            spinner.handleCloseSpinner()
        })
    }

    return (
        <div className={style.root}>
            <Typography variant="h3" component="h1" className={style.title}>ISEN FORM</Typography>

            <div className={style.connectionTitle} onClick={showPopUpConnection}>
                <PersonIcon fontSize="medium" className={style.iconPerson}/>
                <Typography variant="h6" component="h2">Connection</Typography>
            </div>

            <div className={style.code}>
                <Typography variant="h4 " component="h2">Please enter a code </Typography>
                <form onSubmit={sendCode} className={style.formCode}>
                    <TextField error={Boolean(formCodeError)}
                               helperText={formCodeError !== "" ? formCodeError : ''}
                               name="code" id="CodeField" variant="outlined" placeholder="Code"
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