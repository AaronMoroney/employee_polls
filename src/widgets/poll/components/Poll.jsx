import { useState, useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';

import { getQuestions } from '../../../containers/posts/actions';
import { PollsSwitch } from '../../../features/buttons'
import PollsCard from '../../../features/polls/components/PollsCard';

const Poll = () => {
    const [isFiltered, setIsFiltered] = useState(true);

    const dispatch = useDispatch();
    const questions = useSelector(state => state.questions);

    useEffect(() => {
        dispatch(getQuestions());
    }, [dispatch]);

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
            <PollsCard 
                questions={questions} 
            />
        </>
    )
}

export default Poll;