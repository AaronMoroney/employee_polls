import { useState, useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';

import { getQuestions } from '../../../containers/questions/actions';
import { PollsSwitch } from '../../../features/buttons'
import PollsCard from '../../../features/polls/components/PollsCard';
import { AppState } from '../../../../types';
import { QuestionsAction } from '../../../containers/questions/types';

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

    const dispatch = useDispatch<ThunkDispatch<{}, {}, QuestionsAction>>();
   
    useEffect(() => {
        dispatch(getQuestions());
    }, [dispatch]);

    const questions = useSelector((state: AppState) => state.questions.questions);

    const handleIsFiltered = () => {
        setIsFiltered(!isFiltered)
    }

    useEffect(() => {
        console.log(questions)
    })
   
    return (
        <>
            <Box sx={styles.polls__page__header}>
                <Typography variant='h4' gutterBottom>Polls</Typography>
                <PollsSwitch
                    onClick={handleIsFiltered}
                />
            </Box>
            
            {(questions ? Object.keys(questions) :[]).map((question) => {
                return (
                    <PollsCard 
                        key={question}
                        question={questions[question]}
                    />
                )  
            })}
        </>
    )
}

export default Poll;