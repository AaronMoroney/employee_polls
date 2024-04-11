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
            <Box sx={{ borderLeft: '1px slategrey solid', borderRight: '1px slategrey solid',  height: '100%', padding: '0px 35px' }}>
                <Box sx={{display: 'flex', flexDirextion: 'row', justifyContent: 'space-between', alignItems: 'baseline'}}>
                    <Typography variant='h4' gutterBottom>Polls</Typography>
                    <PollsSwitch
                        onClick={handleIsFiltered}
                    />
                </Box>
                <PollsCard />
            </Box>
        </>
    )
}

export default Poll