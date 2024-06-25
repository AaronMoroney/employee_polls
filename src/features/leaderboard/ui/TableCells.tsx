import { 
    TableCell, 
    Avatar,
} from "@mui/material";

import { UserAnswers } from "../../../entities/users/model/types";

interface CellsProp {
    user: string;
    answers: UserAnswers;
    questions: string[];
    avatar: string | null
}

const styles = {
    avatar__header: {
        display: 'flex',
        alignItems: 'center'
    },
    avatar: {
        marginRight: '10px'
    }
}

const TableCells: React.FC<CellsProp> = (props) => {
    const { questions, answers, user} = props;

    const questionsTally = questions.length;
    const answersTally = Object.keys(answers).length;
    const engagement = questionsTally + answersTally

    return (
        <>
            <TableCell component="th" scope="row" sx={styles.avatar__header}>
                <Avatar sx={styles.avatar} />
                {user}
            </TableCell>
            <TableCell align="right">{questionsTally}</TableCell>
            <TableCell align="right">{answersTally}</TableCell>
            <TableCell align="right">{engagement}</TableCell>
        </>
    )
}

export default TableCells