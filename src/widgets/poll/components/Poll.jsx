import { useState } from 'react'
import { Box, Typography } from '@mui/material'
import { PollsSwitch } from '../../../features/buttons'
import PollsCard from '../../../features/polls/components/PollsCard';


const Poll = () => {
    const [isFiltered, setIsFiltered] = useState(true);

    const handleIsFiltered = () => {
        setIsFiltered(!isFiltered)
    }

    return (
        <>
            <Box sx={{display: 'flex', flexDirextion: 'row', justifyContent: 'space-between', alignItems: 'baseline'}}>
                <Typography variant='h4' gutterBottom>Polls</Typography>
                <PollsSwitch
                    onClick={handleIsFiltered}
                />
            </Box>
            <PollsCard />
        </>
    )
}

export default Poll