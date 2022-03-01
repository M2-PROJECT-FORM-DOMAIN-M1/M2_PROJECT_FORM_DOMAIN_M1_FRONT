import React from 'react'
import ResultPerQuestionTable from "../ResultPerQuestionTable/resultPerQuestionTable";
import {useStyle} from "../ResultPerQuestionCheckBox/style";
import {Bar, BarChart, CartesianGrid, ResponsiveContainer, XAxis, YAxis} from "recharts";
import {Tooltip} from "@material-ui/core";
export default function ResultPerQuestionRadio(props){


    const answers = props.question.answers.map((o) =>[...o.answer.split(";")])
    const style = useStyle()

    const objAllAnswers = {}

    for (const value of answers) {
        for (const valueKey of value) {
            if (objAllAnswers.hasOwnProperty(valueKey)) {
                objAllAnswers[valueKey] += 1
            } else {
                objAllAnswers[valueKey] = 1
            }
        }

    }

    const formattedObjForChart = []
    for (let [key, value] of Object.entries(objAllAnswers)) {
        formattedObjForChart.push({
            name: key,
            value: value
        })
    }


    return(
        <div>
            <div className={style.containeChart}>
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart width={500}
                              height={300} data={formattedObjForChart}  margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}>
                        <CartesianGrid strokeDasharray="3 3"/>
                        <XAxis dataKey="name"/>
                        <YAxis/>
                        <Tooltip/>
                        <Bar dataKey="value" fill="#8884d8"/>
                    </BarChart>
                </ResponsiveContainer>
            </div>
            <ResultPerQuestionTable question={props.question}/>
        </div>
    )
}