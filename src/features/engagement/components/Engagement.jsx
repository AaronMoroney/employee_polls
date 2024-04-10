import { 
    Typography, 
} from '@mui/material'
const Engagement = () => {

    const engagement = 90;
    let icon;

    if(engagement < 33) {
       icon =  '🔴'
    } else if(engagement >33 &&  engagement < 66) {
        icon = '🟠'
    } else if(engagement > 66 && engagement < 95) {
        icon = '🟢'
    } else  {
        icon = '🔥'
    }
    
    return (
        <>
            <Typography sx={{fontWeight: 'bold'}}>{`${engagement}% Engagement ${icon}`}  </Typography>
        </>
    )
}

export default Engagement