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
import { findUserPosition } from '../../../shared/helpers/leaderboard';

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

    const POSITION = 1
    let positionedUsers: User[] = [];

    positionedUsers = users && findUserPosition(users);
    
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
                        {positionedUsers && Object.keys(positionedUsers).map((userId, index) => {
                            // @ts-ignore
                            // map method turns the user id into a string, rathe than a number
                            const user = positionedUsers?.[userId];
                            const currentPosition = POSITION + index 

                            return (
                                <TableRow
                                    key={user.id}
                                >
                                    <TableCells
                                        user={user.name}
                                        questions={user.questions}
                                        answers={user.answers}
                                        position={currentPosition}
                                        avatar={user.avatarURL}
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