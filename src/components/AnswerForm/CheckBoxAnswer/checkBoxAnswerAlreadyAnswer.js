import React from "react";
import {Checkbox, FormControlLabel} from "@mui/material";
import Constant from "../../Constant";
import {useStyle} from "./style";


export default function CheckBoxAnswerAlreadyAnswer(props) {
    const style = useStyle();

    const allPossibleAnswers = props.allPossibleAnswers === "" ? [] : props.allPossibleAnswers.split(Constant.ANSWER_DELIMITER)

    let answersSaved = props.answerSaved.filter((elem)=>elem.questionId === props.id)

    if(answersSaved.length > 0){
        answersSaved = answersSaved[0].answer.split(Constant.ANSWER_DELIMITER)
    }else{
        answersSaved=[]
    }

    return(
        <div  className={style.root}>
            {
                allPossibleAnswers.map((elem, i) => {
                    return (
                        <FormControlLabel
                            disabled
                            checked={answersSaved.includes(elem)}
                            key={i}
                            name={elem}
                            className={style.formLabel}
                            label={elem}
                            control={<Checkbox className={style.checkBox}/>}
                        />
                    )
                })
            }
        </div>


    )
}