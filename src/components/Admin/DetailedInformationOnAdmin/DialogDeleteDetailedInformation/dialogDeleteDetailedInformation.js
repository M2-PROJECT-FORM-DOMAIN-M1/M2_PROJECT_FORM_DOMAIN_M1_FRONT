import React from "react";
import {useStyle} from "./style";
import {Button, Typography} from "@mui/material";
import axios from "axios";
import {useSnackbar} from "notistack";
import {useSpinner} from "../../../Context/spinnerContext";


export default function DialogDeleteDetailedInformation(props) {


    const style = useStyle()
    const {enqueueSnackbar} = useSnackbar();
    const [sendingData, setSendingData] = React.useState(false);
    const spinner = useSpinner();

    const submit = (e) => {
        e.preventDefault()
        let form = new FormData(e.target)
        const formProps = Object.fromEntries(form);
        setSendingData(true)
        spinner.handleOpenSpinner()
        axios.post("/admin/deleteForm", formProps).then((response) => {
            if (response.status === 200) {
                enqueueSnackbar('formulaire supprimé', {
                    anchorOrigin: {
                        vertical: 'top',
                        horizontal: 'center',
                    },
                    variant: 'success',
                })

                let pos =
                    props.users.forms.findIndex((elem) => {
                        return elem.id === parseInt(formProps.id)
                    })
                props.users.forms.splice(pos, 1)
                props.dialog.handleCloseDialog()
            }
        }).catch(function (error) {
            console.log(error);
        }).then(() => {
            spinner.handleCloseSpinner()
            setSendingData(false)
        })
    }


    return (
        <div className={style.root}>
            <Typography variant={"h5"} component={"p"} className={style.title}>
                êtes-vous sur de vouloir supprimer le formulaire ?
            </Typography>
            <form className={style.containerForm} onSubmit={submit}>
                <input type={"hidden"} name="id" value={props.elem.id}/>
                <div className={style.containerButton}>
                    <Button disabled={sendingData} type={"submit"} variant="contained"
                            className={style.buttonSend}>Oui</Button>
                    <Button onClick={() => props.dialog.handleCloseDialog()} variant="contained"
                            className={style.buttonCancel}>Annuler</Button>
                </div>


            </form>
        </div>
    )

}