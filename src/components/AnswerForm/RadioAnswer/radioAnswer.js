import React from "react";
import Constant from "../../Constant";
import {FormControlLabel, RadioGroup} from "@mui/material";
import {useStyle} from "./style";
import Radio from '@mui/material/Radio';

export default function RadioAnswer(props){

    const answer = props.allPossibleAnswers === "" ? [] :  props.allPossibleAnswers.split(Constant.ANSWER_DELIMITER)
    const style =useStyle();


    const handleChange = (value) => {
        props.setAnswer((elem) => {
            let temp = [...elem]

            if( temp[props.index].answer === value){
                temp[props.index].answer=""
                props.showWithRules("")
            }else{
                temp[props.index].answer=value
                props.showWithRules(value)
            }



            return temp
        })
    }


    return(
        <RadioGroup   value={props.answer[props.index].answer} className={style.root}>
            {
                answer.map((elem,i)=>{
                    return(
                        <FormControlLabel
                            key={i}
                            value={elem}
                            className={style.formLabel}
                            label={elem}
                            control={<Radio   onClick ={()=>handleChange(elem)}  className={style.radio}/>}
                        />
                    )
                })
            }
        </RadioGroup>

    )

}