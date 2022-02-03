import React from "react"
import AddCircleIcon from '@mui/icons-material/AddCircle';
import {useStyle} from "./style";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import {Typography} from "@material-ui/core";
import Button from "@mui/material/Button";
import Slide from '@mui/material/Slide';
import IconButton from "@mui/material/IconButton";
import clsx from "clsx";
import DialogAddQuestion from "./DialogAddQuestion/dialogAddQuestion";
import {useDialog} from "../../Context/dialogContext";
import axios from "axios";
import {useSpinner} from "../../Context/spinnerContext";
import {useSnackbar} from "notistack";
import Question from "./Question/question";
import EditedQuestion from "./EditedQuestion/editedQuestion";
import {DragDropContext, Draggable, Droppable} from "react-beautiful-dnd";
import reorder from "../../Utils/reorder";

export default function EditAndQuestionForm(props) {


    const style = useStyle();
    const animationDuration = 300

    const {enqueueSnackbar} = useSnackbar();
    const spinner = useSpinner();
    const dialog = useDialog();
    const [openEdit, setOpenEdit] = React.useState(false)
    const [allQuestionType, setAllQuestionType] = React.useState([])
    const [questionEdited, setQuestionEdited] = React.useState({})
    const [questionEditedIndex, setQuestionEditedIndex] = React.useState()

    const [form, setForm] = React.useState(null)
    const [openEditAnimationRunning, setOpenEditAnimationRunning] = React.useState(false)

    const handleOpenEdit = () => {
        setOpenEdit(!openEdit)
    }

    const handleSave = () => {
        spinner.handleOpenSpinner()
        axios.post("/superAdmin/editAndAddFormToUsers", {
            id: props.connectedAdmin.id,
            form: form,
        }).then(function (response) {
            let res = []
            response.data.data.questions.forEach((elem, index) => {
                elem.draggableId = index.toString();
                res.push(elem)

            })
            response.data.data.questions = res
            setForm(response.data.data)

            enqueueSnackbar("Form saved", {
                anchorOrigin: {
                    vertical: 'top',
                    horizontal: 'center',
                },
                variant: 'success',
            })
        })
            .catch(function (error) {
                enqueueSnackbar("An error occurred when saving form ", {
                    anchorOrigin: {
                        vertical: 'top',
                        horizontal: 'center',
                    },
                    variant: 'error',
                })
            }).then(() => {
            spinner.handleCloseSpinner()
        })
    }

    const handleEditOpenAnimationRunning = () => {
        setOpenEditAnimationRunning(true)
        setTimeout(function () {
            setOpenEditAnimationRunning(false)
        }, animationDuration);
    }


    const getAllQuestionType = () => {
        return axios.get('/questionType/getAll')
            .then(function (response) {
                setAllQuestionType(response.data.dataList)
            })
            .catch(function (error) {
                enqueueSnackbar("An error occured when fetching all form type", {
                    anchorOrigin: {
                        vertical: 'top',
                        horizontal: 'center',
                    },
                    variant: 'error',
                })
            })

    }

    const getFormById = () => {
        return axios.post('/form/getFormById', {
            id: props.idForm
        })
            .then(function (response) {
                let res = []
                response.data.data.questions.forEach((elem, index) => {
                    elem.draggableId = index.toString();
                    res.push(elem)

                })
                response.data.data.questions = res
                setForm(response.data.data)
            })
            .catch(function (error) {
                enqueueSnackbar("An error occured when fetching form by ID", {
                    anchorOrigin: {
                        vertical: 'top',
                        horizontal: 'center',
                    },
                    variant: 'error',
                })
            })

    }

    const handleChangeName = (e) => {
        setForm((elem) => {
            let res = {...elem}
            res.name = e.target.value
            return res
        })
    }

    const onDragEnd = (result) => {
        // dropped outside the list
        if (!result.destination) {
            return;
        }

        const items = reorder(
            form.questions,
            result.source.index,
            result.destination.index
        );

        setForm((elem) => {
            let res = JSON.parse(JSON.stringify(elem))
            res.questions = items
            return res
        })
    }

    React.useEffect(() => {
        spinner.handleOpenSpinner()

        Promise.all([getAllQuestionType(), getFormById()]).then(() => {
            spinner.handleCloseSpinner()
        })
// eslint-disable-next-line react-hooks/exhaustive-deps
    },[])


    return (
        <React.Fragment>
            {
                form !== null ?

                    <div className={clsx(openEditAnimationRunning && style.rootEditAnimationRunning)}>
                        <div className={style.root}>
                            {
                                <Paper className={style.globalInfoForm}>
                                    <div className={style.globalInfoFormTop}>
                                        <div className={style.titleForm}>
                                            <TextField onChange={(e) => handleChangeName(e)} value={form.name}
                                                       className={style.titleTextFieldForm} variant="standard"/>
                                        </div>
                                    </div>
                                    {
                                        !props.isCreation ?   <div className={style.containerCode}>
                                            <Typography className={style.textCode}>
                                                Code : <span> {form.code} </span>
                                            </Typography>
                                        </div> : <></>
                                    }

                                </Paper>
                            }

                            <div className={style.containerQuestion}>
                                <DragDropContext onDragEnd={onDragEnd}>
                                    <Droppable droppableId="droppable">
                                        {(provided, snapshot) => (
                                            <div {...provided.droppableProps} ref={provided.innerRef}>
                                                {form.questions.map((item, index) => (
                                                    <Draggable key={item.draggableId} draggableId={item.draggableId}
                                                               index={index}>
                                                        {(provided, snapshot) => (
                                                            <div
                                                                ref={provided.innerRef}
                                                                {...provided.draggableProps}
                                                                {...provided.dragHandleProps}
                                                            >
                                                                {
                                                                    <div key={index} className={style.question}>
                                                                        <Question handleOpenEdit={handleOpenEdit}
                                                                                  setQuestionEditedIndex={setQuestionEditedIndex}
                                                                                  setQuestionEdited={setQuestionEdited}
                                                                                  setForm={setForm}
                                                                                  elem={item} index={index}/>
                                                                    </div>
                                                                }
                                                            </div>
                                                        )}
                                                    </Draggable>
                                                ))}
                                                {provided.placeholder}
                                            </div>
                                        )}
                                    </Droppable>
                                </DragDropContext>
                            </div>

                            <hr/>
                            <div className={style.bottom}>
                                <IconButton onClick={() => dialog.handleOpenDialog({
                                    childrenDialog: <DialogAddQuestion setForm={setForm}
                                                                       allQuestionType={allQuestionType}
                                                                       dialog={dialog}/>,
                                    direction: "down"
                                })}>
                                    <AddCircleIcon className={style.addCircleIcon}/>
                                </IconButton>
                                <Button className={style.saveButton} variant={"contained"} onClick={() => handleSave()}>
                                    Save
                                </Button>
                            </div>
                        </div>
                        <Slide timeout={animationDuration} addEndListener={() => handleEditOpenAnimationRunning()}
                               direction="left"
                               in={openEdit} mountOnEnter unmountOnExit>
                            <div className={style.editRoot}>
                                <EditedQuestion setForm={setForm} questionEditedIndex={questionEditedIndex}
                                                setOpenEdit={setOpenEdit} openEdit={openEdit}
                                                setQuestionEdited={setQuestionEdited} questionEdited={questionEdited}/>
                            </div>
                        </Slide>

                    </div> : <></>
            }
        </React.Fragment>


    )

}