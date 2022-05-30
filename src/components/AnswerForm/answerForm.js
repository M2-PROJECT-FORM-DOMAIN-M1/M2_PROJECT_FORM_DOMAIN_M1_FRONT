import React from "react";
import {useStyle} from "./style";
import {useSpinner} from "../Context/spinnerContext";
import axios from "axios";
import {useSnackbar} from "notistack";
import Answer from "./Answer/answer";
import Typography from "@mui/material/Typography";
import {DrawerStyled} from "../StyledComponents/drawerStyled";
import {DrawerHeaderStyled} from "../StyledComponents/drawerHeaderStyled";
import Brightness1Icon from '@mui/icons-material/Brightness1';
import clsx from "clsx";
import {Button, Divider} from "@mui/material";
import useIsSignedIn from "../Utils/isOfficeUserSignedIn";
import {Login} from "@microsoft/mgt-react";

export default function AnswerForm(props) {

    const style = useStyle()
    const [form, setForm] = React.useState(null)
    const spinner = useSpinner();
    const {enqueueSnackbar} = useSnackbar();
    const [isSignedIn] = useIsSignedIn();
    const [answer, setAnswer] = React.useState([]);
    const [answerSaved, setAnswerSaved] = React.useState(null);

    const getAnswerIfAlreadyAnswered = () => {
        return axios.post('/public/answer/getAnswersSaved', {
            code: props.match.params.code,
            email: isSignedIn.email,
            token: isSignedIn.token
        })
            .then(async function (response) {
                if (response.data.answersList.length > 0) {
                    setAnswerSaved(response.data.answersList)
                } else {
                    setAnswerSaved(false)
                }

            })
            .catch(function (error) {
                console.log(error)
                enqueueSnackbar("An error occurred when fetching saved answers", {
                    anchorOrigin: {
                        vertical: 'top',
                        horizontal: 'center',
                    },
                    variant: 'error',
                })
            })
    }


    const getForm = () => {
        return axios.post('/public/form/getFormByCode', {
            code: props.match.params.code
        })
            .then(function (response) {

                let answer = [];
                response.data.form.questions.forEach((elem) => {
                    elem.show=!elem.rules;
                    answer.push({
                        answer: "",
                        question: elem.id
                    })
                })
                setAnswer(answer)
                setForm(response.data.form)
            })

            .catch(function (error) {
                enqueueSnackbar("An error occurred when fetching form", {
                    anchorOrigin: {
                        vertical: 'top',
                        horizontal: 'center',
                    },
                    variant: 'error',
                })
            })
    }


    React.useEffect(() => {
        spinner.handleOpenSpinner()


        if (isSignedIn != null) {
            Promise.all([getForm(), getAnswerIfAlreadyAnswered()]).then(() => {
                spinner.handleCloseSpinner()
            })
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isSignedIn])

    const getECTSCount = () => {
        let count = 0
        if (form !== null && isSignedIn !== null) {

            form.questions.forEach((item, i) => {
                if (answer[i].answer !== undefined && answer[i].answer !== "" && answer[i].answer !== null) {
                    count += item.ects
                }
            })
        }
        return count
    }

    const checkIfAllRequiredQuestionAnswer = () =>{
       let allQuestions =  form.questions.filter((elem,index)=>elem.show)

        let questionRequiredAndNotAnswered = true

        allQuestions.forEach((elem,i) => {
            if(elem.required){
                if( (answer[i].answer === undefined || answer[i].answer === "" || answer[i].answer === null) ){
                    questionRequiredAndNotAnswered =false;
                    elem.requiredAndNotAnswer = true;
                }else{
                    elem.requiredAndNotAnswer = false;
                }
            }
        })

        setForm((elem)=>{
            let res = {...elem}
            res.question=allQuestions;
            return res
        })

        return questionRequiredAndNotAnswered
    }
    const sendAnswers = () => {

        if(checkIfAllRequiredQuestionAnswer()){
            spinner.handleOpenSpinner()
            axios.post("/public/answer/sendAnswer", {
                code:props.match.params.code,
                answers: answer,
                email: isSignedIn.email,
                token: isSignedIn.token
            }).then(async (res) => {
                if (res.status === 200) {
                    enqueueSnackbar("Answer send", {
                        anchorOrigin: {
                            vertical: 'top',
                            horizontal: 'center',
                        },
                        variant: 'success',
                    })
                    await getAnswerIfAlreadyAnswered()
                } else {
                    enqueueSnackbar("An error occurred ", {
                        anchorOrigin: {
                            vertical: 'top',
                            horizontal: 'center',
                        },
                        variant: 'error',
                    })
                }

            }).catch((reason => {
                enqueueSnackbar("An error occurred ", {
                    anchorOrigin: {
                        vertical: 'top',
                        horizontal: 'center',
                    },
                    variant: 'error',
                })
            })).then((value => {
                spinner.handleCloseSpinner()
            }))
        }



    }

    let countECTS = getECTSCount()

    const drawer = (
        form !== null && isSignedIn !== null &&
        <div className={style.containerDrawer}>
            <DrawerHeaderStyled open={true}>
                <Typography variant={'h5'} className={style.formName}>
                    {form.name}
                </Typography>
            </DrawerHeaderStyled>
            {
                answerSaved === false && <div className={style.containerStepper}>
                    {
                        form.questions.map((item, i) => {
                            return (
                                item.show &&
                                <div key={i}>
                                    <div className={style.containerStepperRow}>

                                        <Typography component={"p"}>
                                            {
                                                i % 2 === 0 && "Question " + (i+1-form.questions.filter((elem,index)=>!elem.show && index<i ).length)
                                            }
                                            {
                                                i % 2 === 0 && item.required && " *"
                                            }
                                        </Typography>
                                        <span>
                                        <Brightness1Icon
                                            className={clsx(style.brightness1IconStepper, answer[i].answer !== undefined && answer[i].answer !== "" && answer[i].answer !== null && style.brightness1IconStepperGreen)}/>
                                    </span>
                                        <Typography component={"p"}>
                                            {
                                                i % 2 === 1 &&  "Question " + (i+1-form.questions.filter((elem,index)=>!elem.show && index<i).length)
                                            }
                                            {
                                                i % 2 === 1 && item.required && " *"
                                            }
                                        </Typography>

                                    </div>
                                    {
                                        i + 1 !== form.questions.length &&
                                        <div className={style.dividerStepperRow}></div>
                                    }

                                </div>

                            )


                        })
                    }
                </div>
            }


            <div className={style.containerBottom}>
                <div className={style.ects}>
                    {
                        countECTS > 0 && "Total ECTS : " + getECTSCount()
                    }
                </div>
                <Button variant={"contained"} className={style.buttonBackToMenu}
                        onClick={() => window.location.replace("/")}>
                    Back to Main Page
                </Button>
                <Login className={style.login}/>
            </div>
        </div>
    );


    return (
        <div className={style.root}>
            {
                form === null || isSignedIn === null || answerSaved === null ? <></>
                    :
                    isSignedIn === false ? window.location.replace("/loginOffice?code=" + props.match.params.code) :
                        <div className={style.containerAnswers}>
                            <DrawerStyled
                                open={true}
                                variant="permanent"
                                className={style.drawer}
                            >
                                {drawer}
                            </DrawerStyled>
                            {form.questions.map((item, index) => {
                                return (
                                    (item.show && !props.answerSaved) &&
                                        <div key={index} className={style.containerAnswer}>
                                            <Answer answerSaved={answerSaved} answer={answer} showedIndex={index-form.questions.filter((elem,i)=>!elem.show && i<index ).length} index={index}
                                                    setAnswer={setAnswer} elem={item} questions={form.questions}/>
                                        </div>
                                )
                            }



                            )}
                            {
                                !answerSaved && <>
                                    <Divider/>
                                    <div className={style.containerSaveButton}>

                                        <Button variant={"contained"} className={style.saveButton}
                                                onClick={() => sendAnswers()}>
                                            Send Answers
                                        </Button>
                                    </div>
                                </>
                            }


                        </div>


            }

        </div>
    )

}