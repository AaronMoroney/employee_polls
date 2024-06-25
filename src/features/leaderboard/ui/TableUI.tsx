import React from 'react';
import {  
    Table, 
    TableBody,
    TableCell,
    TableContainer,
    TableHead ,
    TableRow ,
} from '@mui/material'

import {  User } from '../../../entities/users/model/types';
import TableCells from './TableCells';

interface TableProps {
    users: Record<string, User>;
}

const styles = {
    listItem: {
        display: 'flex', 
        flexDirection: 'row', 
        alignItems: 'center', 
        justifyContent:'space-between'
    }, 
    position: {
        display: 'flex', 
        flexDirection: 'row', 
        alignItems: 'center' 
    },
    metrics: {
        display: 'flex', 
        flexDirection: 'row'
    }
}

const TableUI: React.FC<TableProps> = (props) => {
    const { users } = props;

    return (
        <>
            <TableContainer >
                <Table sx={{ minWidth: 650 }} aria-label="leaderboard">
                    <TableHead>
                        <TableRow>
                            <TableCell>name</TableCell>
                            <TableCell align="right">questions</TableCell>
                            <TableCell align="right">answers</TableCell>
                            <TableCell align="right">total engagement</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody >
                        {users && Object.keys(users).map((userId) => {
                            const user = users?.[userId];
                            return (
                                <TableRow
                                    key={user.id}
                                >
                                    <TableCells
                                        key={user.id}
                                        avatar={user.avatarURL}
                                        user={user.name}
                                        questions={user.questions}
                                        answers={user.answers}
                                    />
                                </TableRow>
                            )
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    )
}

export default TableUI