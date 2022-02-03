import React from "react";
import {Divider, TextField} from "@mui/material";
import Button from "@mui/material/Button";
import {useStyle} from "./style";
import Option from "../Options/options";


export default function EditedQuestionTextInput(props) {

    const style = useStyle();

    return (
        <div>
            <div className={style.rootAnswer}>
                <TextField value={""} variant={"outlined"} />
            </div>
            <Option questionEdited={props.questionEdited} setQuestionEdited={props.setQuestionEdited}/>
            <Divider/>
            <div className={style.bottom}>
                <Button onClick={() => {
                    props.handleSaveEditedQuestion()
                }} className={style.saveButton} variant={"contained"}>
                    Save
                </Button>
            </div>
        </div>

    )

}