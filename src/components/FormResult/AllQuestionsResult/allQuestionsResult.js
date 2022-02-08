import {Typography} from "@mui/material";
import Paper from "@mui/material/Paper";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import React from "react";
import {useStyle} from "./style";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Button from "@mui/material/Button";
import {CSVLink} from "react-csv";

export default function AllQuestionsResult(props) {
    const style = useStyle()

    const form = props.form

    const getAnswerPerQuestionPerPeople = () =>{
        let res = new Map();
        form.questions.forEach((question)=>{
            let answers = {}
            question.answers.forEach((answer)=>{
                answers[answer.mail]=answer.answer
            })
            res.set(question.question,answers)
        })
        return res

    }

    const getPeopleAnswered = () => {
        let res = 0;
        res = form ? form.questions.map((temp) => temp.answers) : []
        if (res !== 0) {
            let resList = new Set()
            res.map((o) => o.map((temp) => resList.add(temp.mail)))
            res = resList
        }

        return res
    }

    const peopleAnswered = getPeopleAnswered()
    const answerPerQuestionPerPeople = getAnswerPerQuestionPerPeople()

    const getNumberAnswer = () => {
        let size = 0

        if (form) {
            let res = form.questions.map((temp) => temp.answers.length)
            res.map((o) => size += o)
        }

        return size
    }

    const csvData = [
        ["question"]
    ];

    peopleAnswered.forEach((people) => {
        csvData.at(0).push(people)
    })

    form.questions.forEach((question) => {

        let temp = [question.question]
        peopleAnswered.forEach((people) => {
            let res = answerPerQuestionPerPeople.get(question.question)[people]
            if(res){
                temp.push(res)
            }else{
                temp.push("")
            }
        })

        csvData.push(temp)

    })

    return (
        <div>
            <div className={style.containerHeader}>
                <Button startIcon={<ArrowBackIcon/>} variant={"contained"} className={style.buttonBack} onClick={() => {
                    props.setWhichComponent(0)
                }}>
                    Back
                </Button>
                <Typography className={style.title} variant={"h5"} component={"h2"}>
                    {
                        form.name
                    }
                </Typography>
            </div>

            <table className={style.table}>
                <thead>
                <tr>
                    <td>
                        <Typography className={style.titleTable} variant={"body1"} component={"h2"}>
                            nombre de questions
                        </Typography>
                    </td>
                    <td>
                        <Typography className={style.titleTable} variant={"body1"} component={"h2"}>
                            nombre de participants
                        </Typography>
                    </td>
                    <td>
                        <Typography className={style.titleTable} variant={"body1"} component={"h2"}>
                            nombre de réponses
                        </Typography>
                    </td>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>
                        <Typography className={style.valueTable} variant={"body1"} component={"h2"}>
                            {form ? form.questions.length : 0}
                        </Typography>

                    </td>
                    <td>
                        <Typography className={style.valueTable} variant={"body1"} component={"h2"}>
                            {peopleAnswered.size}
                        </Typography>
                    </td>
                    <td>
                        <Typography className={style.valueTable} variant={"body1"} component={"h2"}>
                            {getNumberAnswer()}
                        </Typography>
                    </td>
                </tr>
                </tbody>

            </table>
            <div className={style.containerDownloadButton}>
                <CSVLink data={csvData} filename={form.name+"-result.csv"}>
                    <Button variant={"contained"} className={style.buttonDownloadResult}>
                        Download result
                    </Button>
                </CSVLink>
            </div>
            <div className={style.rootQuestions}>
                {
                    form.questions.map((question, i) => {
                        return (
                            <Paper key={i} onClick={() => {
                                props.setSelectedQuestion(i)
                                props.setCurrentView(1)
                            }} className={style.question}>
                                <Typography component={"p"} className={style.nameQuestion}>
                                    {
                                        i + ". " + question.question
                                    }
                                </Typography>
                                <ArrowRightIcon/>
                            </Paper>
                        )

                    })
                }
            </div>
        </div>

    )
}