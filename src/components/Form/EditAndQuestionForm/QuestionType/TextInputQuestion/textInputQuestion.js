import React from "react";
import {TextField} from "@mui/material";
import {useStyle} from "./style";

export default function TextInputQuestion(props){

    const style =useStyle();

    return(
        <div className={style.root}>
            <TextField value={""} variant={"outlined"} />
        </div>

    )

}