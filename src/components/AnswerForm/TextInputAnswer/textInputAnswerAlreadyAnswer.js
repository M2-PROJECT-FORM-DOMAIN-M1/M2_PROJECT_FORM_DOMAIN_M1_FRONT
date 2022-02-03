import React from "react";
import {TextField} from "@mui/material";
import {useStyle} from "./style";


export default function TextInputAnswerAlreadyAnswer(props) {

    const style =useStyle();

    let answersSaved = props.answerSaved.filter((elem)=>elem.questionId === props.id)

    if(answersSaved.length > 0){
        answersSaved = answersSaved[0].answer
    }else{
        answersSaved=""
    }



    return(
        <div className={style.root}>
            <TextField disabled value={answersSaved} variant={"outlined"} />
        </div>

    )
}