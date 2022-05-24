import React from "react";
import {useStyle} from "./style";
import {useSnackbar} from "notistack";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";


export default function DialogConfirmQuit(props){

    const style = useStyle();


    const submit = (e) => {
        e.preventDefault()

        props.callBack()


        props.dialog.handleCloseDialog()
    }



    return(
        <div className={style.root}>
            <Typography variant={"h5"} component={"p"} className={style.title}>
                You have unsaved changes <br/> are you sure you cant to quit this page ?
            </Typography>
            <form className={style.containerForm} onSubmit={submit}>
                <div className={style.containerButton}>
                    <Button  type={"submit"} variant="contained"
                             className={style.buttonSend}>Yes</Button>
                    <Button onClick={() => props.dialog.handleCloseDialog()} variant="contained"
                            className={style.buttonCancel}>No</Button>
                </div>


            </form>
        </div>
    )

}