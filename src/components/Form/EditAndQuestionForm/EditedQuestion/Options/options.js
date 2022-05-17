import React from "react";
import Typography from "@mui/material/Typography";
import {useStyle} from "./style";
import {TextField} from "@mui/material";


export default function Option(props){

    const style = useStyle()


    const onChangeECTS = (e) => {
        props.setQuestionEdited((elem)=>{
            let res = JSON.parse(JSON.stringify(elem))
            res.ects = e.target.value
            return res
        })
    }

    const onChangeAbstractID= (e) => {
        props.setQuestionEdited((elem)=>{
            let res = JSON.parse(JSON.stringify(elem))
            res.abstractID = e.target.value
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



        </div>
    )

}