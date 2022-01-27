import React from "react";
import Constant from "../../../../Constant";
import {Checkbox, FormControlLabel} from "@mui/material";
import {useStyle} from "./style";


export default function CheckBoxQuestion(props){

    const answer = props.allPossibleAnswers === "" ? [] :  props.allPossibleAnswers.split(Constant.ANSWER_DELIMITER)
    const style =useStyle();

    return(
        <div className={style.root}>
            {
                answer.map((elem,i)=>{
                    return(
                        <FormControlLabel
                            key={i}
                            className={style.formLabel}
                            label={elem}
                            control={<Checkbox disabled />}
                        />
                    )
                })
            }
        </div>

    )

}