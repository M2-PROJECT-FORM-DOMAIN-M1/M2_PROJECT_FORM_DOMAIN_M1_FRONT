import Constant from "../../Constant";
import {useStyle} from "./style";
import {Checkbox, FormControlLabel} from "@mui/material";
import React from "react";

export default function CheckBoxAnswer(props) {
    const answer = props.allPossibleAnswers === "" ? [] : props.allPossibleAnswers.split(Constant.ANSWER_DELIMITER)
    const style = useStyle();

    const refForm = React.useRef()

    const handleChange = (e) => {
        e.preventDefault()
        let formData = Object.fromEntries(new FormData(e.target))
        let res = ""

        for (const [key] of Object.entries(formData)) {
            res += key + ';'
        }
        res = res.slice(0, -1)
        props.setAnswer((elem) => {
            let temp = [...elem]
            temp[props.index].answer=res
            return temp
        })

        props.showWithRules(res)
    }


    return (
        <form ref={refForm} onSubmit={handleChange} className={style.root}>
            {
                answer.map((elem, i) => {
                    return (
                        <FormControlLabel
                            key={i}
                            name={elem}
                            onChange={(e) => {
                                refForm.current && refForm.current.dispatchEvent(new Event('submit', {
                                    cancelable: true,
                                    bubbles: true
                                }))
                            }}
                            className={style.formLabel}
                            label={elem}
                            control={<Checkbox className={style.checkBox}/>}
                        />
                    )
                })
            }
        </form>

    )
}

