import React from "react";
import Paper from "@mui/material/Paper";
import {useStyle} from "./style";
import {Divider, Typography} from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import {useDialog} from "../../../Context/dialogContext";
import DialogDeleteQuestion from "../DialogDeleteQuestion/dialogDeleteQuestion";
import CheckBoxQuestion from "../QuestionType/CheckBoxQuestion/checkBoxQuestion";
import RadioQuestion from "../QuestionType/RadioQuestion/radioQuestion";
import TextInputQuestion from "../QuestionType/TextInputQuestion/textInputQuestion";


export default function Question(props) {

    const style = useStyle();
    const elem = props.elem
    const dialog = useDialog();


    const getAnswerVue = (questionType, allPossibleAnswers) => {

        switch (questionType) {
            case "CHECKBOX":
                return <CheckBoxQuestion allPossibleAnswers={allPossibleAnswers}/>
            case "RADIO":
                return <RadioQuestion allPossibleAnswers={allPossibleAnswers}/>
            case "TEXTINPUT":
                return <TextInputQuestion/>
            default :
                console.error("unkown question type")
                return <div/>
        }
    }

    return (
        <Paper className={style.root}>
            <div className={style.header}>
                <div className={style.containerTextHeader}>
                    <Typography className={style.question} variant={"h6"}>
                        {
                            elem.question
                        }
                    </Typography>
                    <Typography className={style.question} variant={"body1"}>
                        {
                            elem.questionType.questionTypeRenderText
                        }
                    </Typography>
                    <div className={style.containerOption}>
                        {
                            elem.ects > 0 && <Typography className={style.ects} variant={"body1"}>
                                {
                                    "ECTS : " + elem.ects
                                }
                            </Typography>
                        }
                    </div>

                </div>
                <div className={style.containerButton}>

                    <EditIcon onClick={(e) => {
                        props.handleOpenEdit();
                        props.setQuestionEdited({...elem});
                        props.setQuestionEditedIndex(props.index)
                    }
                    } className={style.buttonEdit}/>
                    <DeleteIcon onClick={(e) => {
                        dialog.handleOpenDialog({
                                childrenDialog: <DialogDeleteQuestion setForm={props.setForm} index={props.index}
                                                                      dialog={dialog}/>,
                                direction: "down"
                            }
                        )
                    }} className={style.buttonDelete}/>
                    {
                        elem.abstractID != null && <Typography className={style.abstractID} variant={"body1"}>
                            {
                                "Abstract ID : " + elem.abstractID
                            }
                        </Typography>
                    }
                </div>
            </div>
            <Divider/>
            <div>
                {
                    getAnswerVue(elem.questionType.questionType, elem.allPossibleAnswers)
                }
            </div>
        </Paper>
    )

}