import { useState, useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';

import { getQuestions } from '../../../containers/posts/actions';
import { PollsSwitch } from '../../../features/buttons'
import PollsCard from '../../../features/polls/components/PollsCard';

const styles = {
    polls__page__header: {
        display: 'flex', 
        flexDirextion: 'row', 
        justifyContent: 'space-between', 
        alignItems: 'baseline'
    }
};

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
            <Box sx={styles.polls__page__header}>
                <Typography variant='h4' gutterBottom>Polls</Typography>
                <PollsSwitch
                    onClick={handleIsFiltered}
                />
            </Box>
            {Object.values(questions).map((question) => {
                return (
                    <PollsCard 
                        question={question}
                        key={question.id}
                    />
                )  
            })}
        </>
    )
}

export default Poll;