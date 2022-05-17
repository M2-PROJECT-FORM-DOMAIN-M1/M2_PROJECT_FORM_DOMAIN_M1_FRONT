import React from "react";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import {useStyle} from "./style";
import EditedQuestionCheckBox from "./EditedQuestionCheckBox/editedQuestionCheckBox";
import CloseIcon from '@mui/icons-material/Close';
import EditedQuestionRadio from "./EditedQuestionRadio/editedQuestionRadio";
import EditedQuestionTextInput from "./EditedQuestionTextInput/editedQuestionTextInput";

export default function EditedQuestion(props) {

    const style = useStyle();

    const handleSaveEditedQuestion=()=>{
        props.setForm((elem)=>{
            let res = JSON.parse(JSON.stringify(elem))
            let resQuestionEdited = JSON.parse(JSON.stringify(props.questionEdited))
            res.questions[props.questionEditedIndex] = resQuestionEdited
            props.setOpenEdit(false);
            console.log(res)
            return res

        })
    }


    const getAnswerVue = (questionType) =>{


        switch (questionType){
            case "CHECKBOX":
                return <EditedQuestionCheckBox handleSaveEditedQuestion={handleSaveEditedQuestion} setQuestionEdited={props.setQuestionEdited} questionEdited={props.questionEdited}/>
            case "RADIO":
                return <EditedQuestionRadio handleSaveEditedQuestion={handleSaveEditedQuestion} setQuestionEdited={props.setQuestionEdited} questionEdited={props.questionEdited}/>
            case "TEXTINPUT":
                return <EditedQuestionTextInput  setQuestionEdited={props.setQuestionEdited} questionEdited={props.questionEdited} handleSaveEditedQuestion={handleSaveEditedQuestion} />
            default :
                console.error("unkown question type")
                return <div/>
        }
    }


    return (

        <Paper className={style.root}>
            {
                props.openEdit && <>
                    <Typography className={style.titleQuestion} variant={"h6"}>
                        {
                            props.questionEdited.question
                        }
                    </Typography>
                    <Typography className={style.typeQuestion} variant={"body1"}>
                        {
                            props.questionEdited.questionType.questionTypeRenderText
                        }
                    </Typography>
                    <CloseIcon className={style.closeIcon} onClick={()=> {
                        props.setOpenEdit(false);
                    }
                    }/>
                    {
                        getAnswerVue(props.questionEdited.questionType.questionType)
                    }

                </>
            }

        </Paper>


    )

}