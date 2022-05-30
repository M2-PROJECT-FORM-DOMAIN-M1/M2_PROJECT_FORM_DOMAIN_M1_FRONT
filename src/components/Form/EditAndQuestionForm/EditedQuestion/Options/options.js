import React from "react";
import Typography from "@mui/material/Typography";
import {useStyle} from "./style";
import {TextField,Checkbox} from "@mui/material";


export default function Option(props){

    const style = useStyle()

    console.log(props.questionEdited.required)

    const onChangeECTS = (e) => {
        props.setQuestionEdited((elem)=>{
            let res = JSON.parse(JSON.stringify(elem))
            res.ects = e.target.value
            return res
        })
    }

    const onChangeRequired = (e) => {
        props.setQuestionEdited((elem)=>{
            let res = JSON.parse(JSON.stringify(elem))
            res.required = e.target.checked
            return res
        })
    }

    return(
        <div className={style.root}>
            <Typography className={style.title} variant={"h6"}>
                Options
            </Typography>

            <div className={style.containField}>
                {/*ECTS*/}
                <div className={style.field}>
                    <Typography className={style.fieldText}>
                        ECTS :
                    </Typography>
                    <TextField type={"number"} value={props.questionEdited.ects} onChange={onChangeECTS}/>
                </div>
            </div>
            <div className={style.containField}>
                {/*ECTS*/}
                <div className={style.field}>
                    <Typography className={style.fieldText}>
                        Required :
                    </Typography>
                    <Checkbox checked={props.questionEdited.required} onChange={onChangeRequired} />
                </div>
            </div>
        </div>
    )

}