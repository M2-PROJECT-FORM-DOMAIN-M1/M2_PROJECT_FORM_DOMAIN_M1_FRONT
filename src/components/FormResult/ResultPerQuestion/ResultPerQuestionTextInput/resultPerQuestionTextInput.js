import React from "react";
import ResultPerQuestionTable from "../ResultPerQuestionTable/resultPerQuestionTable";

export default function ResultPerQuestionTextInput(props){

    return(
        <div>
            <ResultPerQuestionTable question={props.question}/>
        </div>
    )

}