import React from "react";
import Typography from "@mui/material/Typography";
import {TextField} from "@mui/material";
import {useStyle} from "./style";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import FormControl from '@mui/material/FormControl';


export default function EditedQuestionRules(props) {

    const style = useStyle()


    let rules = props.questionEdited.rules


    const getTypeRules = () =>{
        if(rules){
            return  props.allRulesType.find((elem) => elem.id === rules.rulesType .id )
        }else{
            return ''
        }
    }


    const [currentTypeRules, setCurrentTypeRules] = React.useState(getTypeRules());
    const [abstractID, setAbstractID] = React.useState(rules  ? rules.abstractID : null);
    const [specifiedValue, setSpecifiedValue] = React.useState(rules  ? rules.specifiedValue : null);



    const handleRuleValueSpecified = (event) => {
        setCurrentTypeRules(event.target.value)


        props.questionEdited.rules= {
            abstractID:abstractID,
            specifiedValue:specifiedValue,
            rulesType:event.target.value
        }

    }

    const handleChangeAbstractID = (e) => {
        setAbstractID(e.target.value)

        props.questionEdited.rules= {
            abstractID:e.target.value,
            specifiedValue:specifiedValue,
            rulesType:currentTypeRules
        }
    }

    const handleChangeSpecifiedValue = (e) => {
        setSpecifiedValue(e.target.value)

        props.questionEdited.rules= {
            abstractID:abstractID,
            specifiedValue:e.target.value,
            rulesType:currentTypeRules
        }
    }


    return (
        <div className={style.root}>
            <Typography variant={"h6"}>
                Rules
            </Typography>
            <div className={style.container}>
                <div className={style.containerAbstractID}>
                    <Typography variant={"body1"} className={style.abstractIDText}>
                        Show if abstract ID equal to :
                    </Typography>
                    <TextField value={abstractID} onChange={(e) => handleChangeAbstractID(e)} className={style.textFieldAbstractID} ></TextField>
                </div>
                <div className={style.containerAbstractIDAnd}>
                    <Typography variant={"body1"} className={style.abstractIDTextValue}>
                        And if :
                    </Typography>
                    <FormControl className={style.selectAbstractIdValue}>
                        <InputLabel>Value</InputLabel>
                        <Select
                            defaultValue=""
                            labelId="select-label"
                            value={currentTypeRules}
                            label="Value"
                            onChange={handleRuleValueSpecified}

                        >
                            {
                                props.allRulesType.map(function (item){
                                return (
                                <MenuItem key={item.id} value={item}>{item.rulesTypeRenderText}</MenuItem>

                                )})
                            }
                        </Select>
                    </FormControl>
                </div>
                {
                    currentTypeRules  && currentTypeRules.rulesTypeEnum === "SPECIFIED_VALUE" ?
                        <div className={style.containerSpecifiedValue}>
                            <Typography variant={"body1"} className={style.abstractIDText}>
                                Specified value :
                            </Typography>
                            <TextField onChange={(e) => handleChangeSpecifiedValue(e)} value={specifiedValue} className={style.textFieldAbstractID}/>
                        </div>
                        :
                        ""
                }

            </div>

        </div>
    )
}