import React from "react";
import {useStyle} from "./style";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Constant from "../../../../../Constant";
import {useSnackbar} from "notistack";


export default function DialogEditedQuestionRadioAdd(props) {

    const style = useStyle();
    const [sendingData, setSendingData] = React.useState(false);
    const {enqueueSnackbar} = useSnackbar();

    const submit= (e)=>{
        e.preventDefault()
        setSendingData(true)
        const formData = new FormData(e.target);
        const formProps = Object.fromEntries(formData);



        const answer = props.questionEdited.allPossibleAnswers === "" ? [] : props.questionEdited.allPossibleAnswers.split(Constant.ANSWER_DELIMITER)

        if(answer.includes(formProps.answer)){
            enqueueSnackbar("Possible answer already exist", {
                anchorOrigin: {
                    vertical: 'top',
                    horizontal: 'center',
                },
                variant: 'error',
            })
        }else{
            props.setQuestionEdited((elem)=>{
                let res = ""
                if(elem.allPossibleAnswers!==""){
                    res+=";"
                }
                res+=formProps.answer
                elem.allPossibleAnswers+=res
                return elem
            })
            props.dialog.handleCloseDialog()
        }


        setSendingData(false)

    }


    return (
        <div className={style.root}>
            <Typography variant={"h5"} component={"p"} className={style.title}>
                Add new possible answer
            </Typography>
            <form  onSubmit={submit} >
                <TextField
                    required
                    name="answer"
                    label="Answer"
                    className={style.textField}
                />
                <div className={style.containerButton}>
                    <Button disabled={sendingData} type={"submit"} variant="contained"
                            className={style.buttonSend}>Add</Button>
                    <Button onClick={() => props.dialog.handleCloseDialog()} variant="contained"
                            className={style.buttonCancel}>Cancel</Button>
                </div>

            </form>
        </div>
    )

}