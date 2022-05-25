import {useStyle} from "./style";
import {Typography} from "@mui/material";
import React from "react";
import ResultPerQuestionTextInput from "./ResultPerQuestionTextInput/resultPerQuestionTextInput";
import Button from "@mui/material/Button";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ResultPerQuestionCheckBox from "./ResultPerQuestionCheckBox/resultPerQuestionCheckBox";
import ResultPerQuestionRadio from "./ResultPerQuestionRadio/resultPerQuestionRadio";

export default function ResultPerQuestion(props) {

    const style = useStyle()

    const question = props.form.questions[props.selectedQuestion]

    const getView = () => {
        switch (question.questionType.questionType) {
            case "CHECKBOX":
                return <ResultPerQuestionCheckBox question={question}/>
            case "RADIO":
                return <ResultPerQuestionRadio question={question}/>
            case "TEXTINPUT":
                return <ResultPerQuestionTextInput question={question}/>
            default :
                console.error("unkown question type")
                return <div/>
        }
    }


    return (
        <div>
            <div className={style.containerHeader}>
                <Button startIcon={<ArrowBackIcon />} variant={"contained"} className={style.buttonBack} onClick={()=>{
                    props.setCurrentView(0)
                }}>
                    Back
                </Button>
                <Typography className={style.title} variant={"h5"} component={"h2"}>
                    {
                        question.question
                    }
                </Typography>
            </div>

            <div className={style.rootView}>
                {
                    getView()
                }
            </div>

        </div>
    )

}