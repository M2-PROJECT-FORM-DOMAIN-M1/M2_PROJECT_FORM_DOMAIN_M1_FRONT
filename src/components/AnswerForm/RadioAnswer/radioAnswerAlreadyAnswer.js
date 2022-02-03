import React from "react";
import Constant from "../../Constant";
import {FormControlLabel, RadioGroup} from "@mui/material";
import Radio from "@mui/material/Radio";
import {useStyle} from "./style";


export default function RadioAnswerAlreadyAnswer(props) {

    const answer = props.allPossibleAnswers === "" ? [] :  props.allPossibleAnswers.split(Constant.ANSWER_DELIMITER)
    const style =useStyle();

    let answersSaved = props.answerSaved.filter((elem)=>elem.questionId === props.id)

    if(answersSaved.length > 0){
        answersSaved = answersSaved[0].answer.split(Constant.ANSWER_DELIMITER)
    }else{
        answersSaved=[]
    }

    return(
        <RadioGroup className={style.root}>
            {
                answer.map((elem,i)=>{
                    return(
                        <FormControlLabel
                            disabled
                            checked={answersSaved.includes(elem)}
                            key={i}
                            value={elem}
                            className={style.formLabel}
                            label={elem}
                            control={<Radio  className={style.radio}/>}
                        />
                    )
                })
            }
        </RadioGroup>
    )
}