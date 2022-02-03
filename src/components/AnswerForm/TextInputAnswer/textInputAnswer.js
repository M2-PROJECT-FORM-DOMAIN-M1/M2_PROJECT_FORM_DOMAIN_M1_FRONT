import React from "react";
import {TextField} from "@mui/material";
import {useStyle} from "./style";

export default function TextInputAnswer(props){

    const style =useStyle();



    const handleChange = (value) => {
        props.setAnswer((elem) => {
            let temp = [...elem]
            temp[props.index].answer=value
            return temp
        })
    }

    return(
        <div className={style.root}>
            <TextField onChange={(e)=>handleChange(e.target.value)} variant={"outlined"} />
        </div>

    )

}