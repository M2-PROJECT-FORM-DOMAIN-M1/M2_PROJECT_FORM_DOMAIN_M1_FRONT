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

    const [currentRuleValueSpecified, setCurrentRuleValueSpecified] = React.useState();

    const handleRuleValueSpecified = (event) => {
        setCurrentRuleValueSpecified(event.target.value)
    }


    console.log(props)


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
                    <TextField className={style.textFieldAbstractID}></TextField>
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
                            value={currentRuleValueSpecified}
                            label="Value"
                            onChange={handleRuleValueSpecified}

                        >
                            {
                                props.allRulesType.map(function (item){
                                return (
                                <MenuItem key={item.rulesTypeEnum} value={item.rulesTypeEnum}>{item.rulesTypeRenderText}</MenuItem>

                                )})
                            }
                        </Select>
                    </FormControl>
                </div>
                {
                    currentRuleValueSpecified === "oneValueSpecified" ?
                        <div className={style.containerSpecifiedValue}>
                            <Typography variant={"body1"} className={style.abstractIDText}>
                                Specified value :
                            </Typography>
                            <TextField className={style.textFieldAbstractID}/>
                        </div>
                        :
                        ""
                }

            </div>

        </div>
    )
}