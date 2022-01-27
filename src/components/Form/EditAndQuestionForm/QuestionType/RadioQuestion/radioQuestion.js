import React from "react";
import Constant from "../../../../Constant";
import {FormControlLabel, RadioGroup} from "@mui/material";
import {useStyle} from "./style";
import Radio from '@mui/material/Radio';

export default function RadioQuestion(props){

    const answer = props.allPossibleAnswers === "" ? [] :  props.allPossibleAnswers.split(Constant.ANSWER_DELIMITER)
    const style =useStyle();

    return(
        <RadioGroup className={style.root}>
            {
                answer.map((elem,i)=>{
                    return(
                        <FormControlLabel
                            key={i}
                            value={elem}
                            className={style.formLabel}
                            label={elem}
                            control={<Radio  disabled />}
                        />
                    )
                })
            }
        </RadioGroup>

    )

}