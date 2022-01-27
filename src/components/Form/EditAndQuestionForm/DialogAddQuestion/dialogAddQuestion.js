import React from "react"
import {useStyle} from "./style";
import Typography from "@mui/material/Typography";
import {useSnackbar} from "notistack";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import {FormControl, FormHelperText} from "@mui/material";

export default function DialogAddQuestion(props) {

    const [sendingData, setSendingData] = React.useState(false);
    const style = useStyle();
    const [err, setErr] = React.useState({})
    const {enqueueSnackbar} = useSnackbar();

    const [currentTypeQuestion, setCurrentTypeQuestion] = React.useState(  props.allQuestionType[0]);

    const handleChangeCurrentTypeQuestion = (event) => {
        setCurrentTypeQuestion(event.target.value)
    }

    const submit = (e) => {
        e.preventDefault()
        var formData = new FormData(e.target);
        let form = Object.fromEntries(formData)
        setSendingData(true)
        let allError = {}

        if (form.question === "") {
            allError.question = "You have to specified this field"
        } else if (!currentTypeQuestion || Object.keys(currentTypeQuestion).length === 0 ||
            !Object.getPrototypeOf(currentTypeQuestion) === Object.prototype) {
            allError.questionType = "You have to specified this field"
        }

        if (Object.keys(allError).length ===0) {
            e.target.reset()
            props.setForm((elem) => {
                let res = {...elem}
                let tempQuestion = Array.from(res.questions)

                tempQuestion.push({
                    allPossibleAnswers: "",
                    question: form.question,
                    draggableId:res.questions.length.toString(),
                    questionType: currentTypeQuestion
                })
                res.questions = tempQuestion
                return res

            })


            enqueueSnackbar('Question added', {
                anchorOrigin: {
                    vertical: 'top',
                    horizontal: 'center',
                },
                variant: 'success',
            })
            props.dialog.handleCloseDialog()
        } else {
            setErr(allError)
        }
        setSendingData(false)


    }

    return (
        <div className={style.root}>
            <Typography variant={"h5"} component={"p"} className={style.title}>
                Add new question
            </Typography>
            <FormControl component={'form'} className={style.containerForm} onSubmit={submit} fullWidth>
                <div>
                    <InputLabel  error={Boolean(err.questionType)}  id="select-label" >Type of the question</InputLabel>
                    <Select
                        defaultValue=""
                        className={style.checkBox}
                        error={Boolean(err.questionType)}
                        labelId="select-label"
                        value={currentTypeQuestion}
                        label="Type of the question"
                        onChange={handleChangeCurrentTypeQuestion}
                    >
                        {
                            props.allQuestionType.map((elem, i) => {
                                return <MenuItem key={elem.id} value={elem}>{elem.questionTypeRenderText}</MenuItem>
                            })
                        }
                    </Select>
                    {
                        Boolean(err.questionType) &&  <FormHelperText error={true}   >{err.questionType}</FormHelperText>
                    }

                </div>

                <TextField
                    required
                    error={Boolean(err.question)} helperText={err.question}
                    name="question"
                    label="Question"
                    className={style.textFieldQuestion}
                />
                <div className={style.containerButton}>
                    <Button disabled={sendingData} type={"submit"} variant="contained"
                            className={style.buttonSend}>Add</Button>
                    <Button onClick={() => props.dialog.handleCloseDialog()} variant="contained"
                            className={style.buttonCancel}>Cancel</Button>
                </div>

            </FormControl>
        </div>
    )

}