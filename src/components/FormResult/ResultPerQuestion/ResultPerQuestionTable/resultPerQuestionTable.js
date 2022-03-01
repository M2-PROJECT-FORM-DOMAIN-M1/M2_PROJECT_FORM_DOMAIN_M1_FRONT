import React from 'react'
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TablePagination,
    TableRow,
    TableSortLabel
} from "@mui/material";
import Paper from "@mui/material/Paper";
import {useStyle} from "./style";
import formatDate from "../../../Utils/formatDate";

export default function ResultPerQuestionTable(props) {

    const style = useStyle()
    const [currentFilter, setCurrentFilter] = React.useState("createdAtDesc");
    const rowsPerPage = 10
    const [page, setPage] = React.useState(0);

    const question=props.question

    const setClickFilter = (elem) => {
        setCurrentFilter(elem)
    }

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const filter = () => {
        let filter = [...question.answers];
        let orderDirection = 2
        if (currentFilter === "createdAtAsc") {
            orderDirection = 0
        }
        return filter.sort((a, b) => {
            let dateA = new Date(a.createdAt)
            let dateB = new Date(a.createdAt)
            return dateA.getTime() > dateB.getTime() ? 1 - orderDirection : -1 + orderDirection
        })
    }

    return (
        <div>
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell align="center">Email</TableCell>
                            <TableCell align="center">Answer</TableCell>
                            <TableCell align="center">
                                <TableSortLabel
                                    active={currentFilter === "createdAtDesc" || currentFilter === "createdAtAsc"}
                                    direction={currentFilter === "createdAtDesc" ? 'desc' : 'asc'}
                                    onClick={
                                        () => {
                                            if (currentFilter === "createdAtDesc") {
                                                setClickFilter("createdAtAsc")
                                            } else {
                                                setClickFilter("createdAtDesc")
                                            }
                                        }
                                    }>
                                    Send at
                                </TableSortLabel>
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            filter().slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
                                return (<TableRow key={row.id}>
                                    <TableCell align="center" component="td" scope="row">
                                        {row.mail}
                                    </TableCell>
                                    <TableCell align="center" component="td" scope="row">
                                        {row.answer}
                                    </TableCell>
                                    <TableCell align="center" component="td" scope="row">
                                        {formatDate(row.createdAt)}
                                    </TableCell>
                                </TableRow>)
                            })}

                    </TableBody>
                </Table>

                <TablePagination
                    component={"div"}
                    labelDisplayedRows={({
                                             page
                                         }) => `Page : ${page + 1} sur ${Math.ceil(question.answers.length / rowsPerPage)}`}
                    rowsPerPageOptions={[]}
                    colSpan={3}
                    count={question.answers.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}


                />
            </TableContainer>
        </div>
    )

}