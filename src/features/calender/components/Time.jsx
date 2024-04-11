import {useState, useEffect} from 'react'
import { Box } from '@mui/material'

const Time = () => {
    const [bangkokTime, setBangkokTime] = useState('')
    
    const getTimeInTimeZone = (timeZone) => {
        const now = new Date();

        const timeFormatter = new Intl.DateTimeFormat('en-US', {
            hour: '2-digit',
            minute: '2-digit',
            timeZone: timeZone,
            hour12: false
        });
        return timeFormatter.format(now)
    };

    useEffect(() => {
        setBangkokTime(getTimeInTimeZone('Asia/Bangkok'));
    }, []);

    const startHour = '09:00';
    const endHour = '17:00';

    const icon = bangkokTime >= startHour && bangkokTime <= endHour ? '🟢' : '🔴';

    return (
        <>  
            <Box sx={{display: 'flex', justifyContent: 'center', flexDirection: 'column'}}>
                <p className='time'>{`${icon} BKK: ${bangkokTime}`}</p>
                <p className='time'>{`${icon} BKK: ${bangkokTime}`}</p>
            </Box>
        </>
    )
}

export default Time