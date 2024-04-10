import { Typography } from '@mui/material';

const TodaysDate = () => {
    const now = new Date();
    const currentDate = now.getDate(); 
    const currentDay = now.toLocaleString('en-US', { weekday: 'short' });

    return (
        <>
            <Typography
                variant='h5'
            >
                {currentDay}
            </Typography>
            <Typography
                variant='h5'
            >
                {currentDate}
            </Typography>
           
        </>
    )
}

export default TodaysDate