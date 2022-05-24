import React from "react";
import {useStyle} from "./style";
import Paper from "@mui/material/Paper";
import {Divider, Typography} from "@mui/material";
import CheckBoxAnswer from "../CheckBoxAnswer/checkBoxAnswer";
import RadioAnswer from "../RadioAnswer/radioAnswer";
import TextInputAnswer from "../TextInputAnswer/textInputAnswer";
import CheckBoxAnswerAlreadyAnswer from "../CheckBoxAnswer/checkBoxAnswerAlreadyAnswer";
import RadioAnswerAlreadyAnswer from "../RadioAnswer/radioAnswerAlreadyAnswer";
import TextInputAnswerAlreadyAnswer from "../TextInputAnswer/textInputAnswerAlreadyAnswer";


export default function Answer(props) {

    const style = useStyle()
    const elem = props.elem


    const showWithRules = (answer) => {
        let allElemImpacted = [props.questions.find((item) => item.rules && (item.rules.abstractID === elem.abstractID))]


        allElemImpacted.forEach(element => {
            if (element) {
                switch (elem.questionType.questionType) {
                    case "CHECKBOX":
                        switch (element.rules.rulesType.rulesTypeEnum) {
                            case "SPECIFIED_VALUE":
                                if (answer === element.rules.specifiedValue) {
                                    element.show = true;
                                } else {
                                    element.show = false;
                                }
                                break;
                            case "FILLED":
                                if (answer === elem.allPossibleAnswers) {
                                    element.show = true;
                                } else {
                                    element.show = false;
                                }
                                break;
                            case "AT_LEAST_ONE":
                                if (answer !== "") {
                                    element.show = true;
                                } else {
                                    element.show = false;
                                }
                                break;
                        }
                        break;
                    case "RADIO":
                        switch (element.rules.rulesType.rulesTypeEnum) {
                            case "SPECIFIED_VALUE":
                                if (answer === element.rules.specifiedValue) {
                                    element.show = true;
                                } else {
                                    element.show = false;
                                }
                                break;
                            case "FILLED":
                                break;
                            case "AT_LEAST_ONE":
                                if (answer !== "") {
                                    element.show = true;
                                } else {
                                    element.show = false;
                                }
                                break;
                        }
                        break;
                    case "TEXTINPUT":
                        switch (element.rules.rulesType.rulesTypeEnum) {
                            case "SPECIFIED_VALUE":
                                if (answer === element.rules.specifiedValue) {
                                    element.show = true;
                                } else {
                                    element.show = false;
                                }
                                break;
                                break;
                            case "FILLED":
                                console.log(answer)
                                if (answer !== "") {
                                    element.show = true;
                                } else {
                                    element.show = false;
                                }
                                break;
                            case "AT_LEAST_ONE":
                                if (answer !== "") {
                                    element.show = true;
                                } else {
                                    element.show = false;
                                }
                                break;

                        }
                        break;

                }
            }

        });
    }


    const getAnswerVue = (questionType, allPossibleAnswers, id) => {
        if (props.answerSaved) {
            switch (questionType) {
                case "CHECKBOX":
                    return <CheckBoxAnswerAlreadyAnswer id={id} answerSaved={props.answerSaved}
                                                        allPossibleAnswers={allPossibleAnswers}/>
                case "RADIO":
                    return <RadioAnswerAlreadyAnswer id={id} answerSaved={props.answerSaved}
                                                     allPossibleAnswers={allPossibleAnswers}/>
                case "TEXTINPUT":
                    return <TextInputAnswerAlreadyAnswer id={id} answerSaved={props.answerSaved}/>
                default :
                    console.error("unknown question type")
                    return <div/>
            }
        } else {
            switch (questionType) {
                case "CHECKBOX":
                    return <CheckBoxAnswer showWithRules={showWithRules} setAnswer={props.setAnswer} index={props.index}
                                           allPossibleAnswers={allPossibleAnswers}/>
                case "RADIO":
                    return <RadioAnswer showWithRules={showWithRules} setAnswer={props.setAnswer} answer={props.answer}
                                        index={props.index} allPossibleAnswers={allPossibleAnswers}/>
                case "TEXTINPUT":
                    return <TextInputAnswer showWithRules={showWithRules} setAnswer={props.setAnswer}
                                            index={props.index}/>
                default :
                    console.error("unknown question type")
                    return <div/>
            }
        }

    }

    return (
        <div>
            <Paper className={style.root}>
                <div className={style.header}>
                    <div className={style.containerTextHeader}>
                        <Typography className={style.question} variant={"h6"}>
                            {
                                props.index+1 + ". " + elem.question
                            }
                        </Typography>
                    </div>
                    <div>
                        {
                            elem.ects > 0 && <Typography className={style.ects} variant={"h6"}>
                                {
                                    "ECTS : " + elem.ects
                                }
                            </Typography>
                        }
                    </div>
                </div>
                <Divider/>
                <div>
                    {
                        getAnswerVue(elem.questionType.questionType, elem.allPossibleAnswers, elem.id)
                    }
                </div>
            </Paper>
        </div>
    )

}