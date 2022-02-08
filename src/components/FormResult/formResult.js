import React from 'react'
import {useStyle} from "./style";
import axios from "axios";
import {useSnackbar} from "notistack";
import {useSpinner} from "../Context/spinnerContext";
import AllQuestionsResult from "./AllQuestionsResult/allQuestionsResult";
import ResultPerQuestion from "./ResultPerQuestion/resultPerQuestion";

export default function FormResult(props) {

    const style = useStyle()

    const [selectedQuestion, setSelectedQuestion] = React.useState();
    const [currentView, setCurrentView] = React.useState(0);

    const [form, setForm] = React.useState();
    const {enqueueSnackbar} = useSnackbar();
    const spinnerContext = useSpinner();




    const getFormById = () => {
        spinnerContext.handleOpenSpinner();
        return axios.post('/form/getFormByIdFull', {
            id: props.idForm
        })
            .then(function (response) {
                setForm(response.data.form)
            })
            .catch(function (error) {
                enqueueSnackbar("An error occured when fetching form by ID", {
                    anchorOrigin: {
                        vertical: 'top',
                        horizontal: 'center',
                    },
                    variant: 'error',
                })
            }).then(() => {
                spinnerContext.handleCloseSpinner();
            })
    }

    const renderView = () => {
        switch (currentView) {
            case 0:
                return <AllQuestionsResult setWhichComponent={props.setWhichComponent} setCurrentView={setCurrentView} setSelectedQuestion={setSelectedQuestion} form={form}/>
            case 1:
                return <ResultPerQuestion  setCurrentView={setCurrentView} selectedQuestion={selectedQuestion} form={form}/>
            default:
                return <AllQuestionsResult/>

        }
    }

    React.useEffect(() => {
        getFormById()
    }, [])


    return (
        <div>
            {
                form &&
                    <React.Fragment>
                        {
                            renderView()
                        }
                    </React.Fragment>

            }
        </div>
    )

}