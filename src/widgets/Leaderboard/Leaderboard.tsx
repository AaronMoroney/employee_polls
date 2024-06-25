import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ThunkDispatch } from "redux-thunk";
import { Box } from "@mui/material";

import { TableUI, ToggleTimePeriod } from "../../features/leaderboard";
import { getUsers } from "../../entities/users/model/actions";
import { UsersAction } from "../../entities/users/model/types";
import { AppState } from "../../app/providers/with-redux/types";

const styles = {
    leader__page__container: {
        marginTop: '30px',
        height: '95%',
        overflow: 'overlay',
        '&::-webkit-scrollbar': {
            width: '1px',
        },
        '&::-webkit-scrollbar-track': {
            background: 'transparent', 
        },
    },
}

const Leaderboard = () => {
    // TODO: simplify these type defintions
    const dispatch = useDispatch<ThunkDispatch<{}, {}, UsersAction>>();
    
    useEffect(() => {
        dispatch(getUsers());
    }, [dispatch]);

    const users = useSelector((state: AppState) => state.users.users);

    console.log(users);
    
    return (
        <>
            <Box sx = {styles.leader__page__container}>
                <ToggleTimePeriod />
                <TableUI 
                    users={users} 
                />
            </Box>
        </>
    )
}

export default Leaderboard