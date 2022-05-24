import {FormControl, Typography} from "@mui/material";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import React from "react";
import {useStyle} from "../Form/EditAndQuestionForm/DialogAddQuestion/style";
import {useSnackbar} from "notistack";
import axios from "axios";
import {useSpinner} from "../Context/spinnerContext";


export default function CreateFormPopUp(props) {

	const [sendingData, setSendingData] = React.useState(false);
	const style = useStyle();
	const [err, setErr] = React.useState({})
	const {enqueueSnackbar} = useSnackbar();
	const spinner = useSpinner();

	console.log(props)

	const submit = (e) => {
		e.preventDefault()
		var formData = new FormData(e.target);
		let form = Object.fromEntries(formData)

		let allError = {}
		setSendingData(true)

		if (form.name === "") {
			allError.name = "You have to specified this field"
		}

		if (Object.keys(allError).length === 0) {

			axios.post('/admin/createForm', {
				name: form.name
			})
				.then(function (response) {
					props.forms.push(response.data.form)
					props.setIdForm(response.data.form.id)
					props.setWhichComponent(1)
					props.dialog.handleCloseDialog()
				})
				.catch(function (error) {
					console.log(error)
					enqueueSnackbar("An error occured when creating form", {
						anchorOrigin: {
							vertical: 'top',
							horizontal: 'center',
						},
						variant: 'error',
					})
				}).then(() => {
					setSendingData(false)
					spinner.handleCloseSpinner();
				})



		} else {
			setErr(allError)
		}



	}

	return (

		<div className={style.root}>
			<Typography variant={"h5"} component={"p"} className={style.title}>
				Create form
			</Typography>
			<FormControl component={'form'} className={style.containerForm} onSubmit={submit} fullWidth>
				<TextField
					required
					error={Boolean(err.question)} helperText={err.question}
					name="name"
					label="Name"
					className={style.textFieldQuestion}
				/>


				<div className={style.containerButton}>
					<Button disabled={sendingData} type={"submit"} variant="contained"
					        className={style.buttonSend}>Add</Button>
					<Button onClick={() => props.dialog.handleCloseDialog()} variant="contained"
					        className={style.buttonCancel}>Cancel</Button>
				</div>

			</FormControl>
		</div>


	)
}