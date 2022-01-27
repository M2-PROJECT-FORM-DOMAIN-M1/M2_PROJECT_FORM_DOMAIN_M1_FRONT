import React from "react";
import {useStyle} from "./style";
import {useSnackbar} from "notistack";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";


export default function DialogDeleteQuestion(props){

    const style = useStyle();
    const {enqueueSnackbar} = useSnackbar();


    const submit = (e) => {
        e.preventDefault()
        enqueueSnackbar('Question deleted', {
            anchorOrigin: {
                vertical: 'top',
                horizontal: 'center',
            },
            variant: 'success',
        })
        props.setForm((elem)=>{

            let res = {...elem}
            let tempQuestion = Array.from(res.questions)
            const arr = tempQuestion.filter((temp,index)=> index !==props.index)
            res.questions=arr;
            return res
        })

        props.dialog.handleCloseDialog()
    }



    return(
        <div className={style.root}>
            <Typography variant={"h5"} component={"p"} className={style.title}>
                Are you sure you want to delete this question?
            </Typography>
            <form className={style.containerForm} onSubmit={submit}>
                <div className={style.containerButton}>
                    <Button  type={"submit"} variant="contained"
                            className={style.buttonSend}>Delete</Button>
                    <Button onClick={() => props.dialog.handleCloseDialog()} variant="contained"
                            className={style.buttonCancel}>Cancel</Button>
                </div>


            </form>
        </div>
    )

}