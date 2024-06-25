import { Typography } from "@mui/material";

import  Leaderboard  from '../../../widgets/Leaderboard/Leaderboard'

const LeaderPage = () => {
    return (
        <>
            <Typography 
                variant='h4'
            >
                Leaderboard
            </Typography>
            <Leaderboard />
        </>
    )
}

export default LeaderPage