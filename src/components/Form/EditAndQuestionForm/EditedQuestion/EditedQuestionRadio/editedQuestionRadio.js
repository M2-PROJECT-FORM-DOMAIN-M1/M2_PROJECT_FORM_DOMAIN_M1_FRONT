import React from "react";
import {Divider, FormControlLabel} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import Button from "@mui/material/Button";
import {useStyle} from "./style";
import {useDialog} from "../../../../Context/dialogContext";
import DialogEditedQuestionRadioAdd from "./DialogEditedQuestionRadioAdd/dialogEditedQuestionRadioAdd";
import Constant from "../../../../Constant";
import DeleteIcon from "@mui/icons-material/Delete";
import {DragDropContext, Draggable, Droppable} from "react-beautiful-dnd";
import listToPossibleAnswer from "../../../../Utils/listToPossibleAnswer";
import reorder from "../../../../Utils/reorder";
import Radio from "@mui/material/Radio";
import Option from "../Options/options";


export default function EditedQuestionRadio(props) {

    const questionEdited = props.questionEdited
    const answer = questionEdited.allPossibleAnswers === "" ? [] : questionEdited.allPossibleAnswers.split(Constant.ANSWER_DELIMITER)
    const dialog = useDialog();
    const style = useStyle();


    const deletePossibleAnswer = (pos) => {
        props.setQuestionEdited((elem) => {
            let res = JSON.parse(JSON.stringify(elem))
            res.allPossibleAnswers = listToPossibleAnswer(answer.filter((temp, index) => index !== pos))
            return res
        })
    }


    const onDragEnd = (result) => {
        // dropped outside the list
        if (!result.destination) {
            return;
        }

        const items = reorder(
            answer,
            result.source.index,
            result.destination.index
        );


        var newPossibleAnswer = listToPossibleAnswer(items)


        props.setQuestionEdited((elem) => {
            let res = JSON.parse(JSON.stringify(elem))
            res.allPossibleAnswers = newPossibleAnswer

            return res
        })
    }

    return (
        <div>
            <DragDropContext onDragEnd={onDragEnd}>
                <Droppable droppableId="droppable">
                    {(provided, snapshot) => (
                        <div {...provided.droppableProps} ref={provided.innerRef}>
                            {answer.map((item, index) => (
                                <Draggable key={item} draggableId={item} index={index}>
                                        {(provided, snapshot) => (
                                            <div
                                                ref={provided.innerRef}
                                                {...provided.draggableProps}
                                                {...provided.dragHandleProps}
                                            >
                                                <div className={style.containerRow}>

                                                    <FormControlLabel
                                                        control={<Radio disabled/>}
                                                        className={style.formLabel}
                                                        label={item}
                                                        value={item}
                                                    />
                                                    <DeleteIcon className={style.buttonDelete}
                                                                onClick={(e) => deletePossibleAnswer(index)}/>

                                                </div>
                                            </div>
                                        )}
                                </Draggable>
                            ))}
                            {provided.placeholder}
                        </div>
                    )}
                </Droppable>
            </DragDropContext>
            <Option questionEdited={props.questionEdited} setQuestionEdited={props.setQuestionEdited}/>
            <Divider/>
            <div className={style.bottom}>
                <IconButton onClick={() => dialog.handleOpenDialog({
                    childrenDialog: <DialogEditedQuestionRadioAdd questionEdited={props.questionEdited}
                                                                  setQuestionEdited={props.setQuestionEdited}
                                                                  dialog={dialog}/>,
                    direction: "down"
                })}>
                    <AddCircleIcon className={style.addCircleIcon}/>
                </IconButton>
                <Button onClick={() => {
                    props.handleSaveEditedQuestion()
                }} className={style.saveButton} variant={"contained"}>
                    Save
                </Button>
            </div>
        </div>

    )

}