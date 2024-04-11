import { 
    Typography, 
    List, 
    ListItem, 
    Divider, 
    ListItemText, 
    ListItemAvatar, 
    Avatar,
    Box, 
} from '@mui/material'

const Leaderboard = () => {
    const engagement = 92;
    let color;

    if(engagement < 33) {
       color =  'red'
    } else if (engagement >33 &&  engagement < 66) {
        color = 'orange'
    } else {
        color = 'green';
    } 
    
    return (
        <>
            <Typography 
                variant='h4'
            >
                Leaderboard
            </Typography>
            <List sx={{ width: '100%' }}>
            <Divider />
                <ListItem sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent:'space-between'}}>
                    <ListItemAvatar>
                        <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }} >
                            <Typography 
                                variant='h4'
                            >
                                1
                            </Typography>
                            <Avatar />
                            <ListItemText sx={{marginLeft: '5%'}}
                                primary="username"
                            />
                        </Box>
                    </ListItemAvatar>
                    <Box>
                        <Typography 
                            sx={{color: color}}
                            variant='h5'
                        >
                            <b>{`${engagement}`}</b>
                        </Typography>
                    </Box>
                </ListItem>
            <Divider />
            </List >
        </>
    )
}

export default Leaderboard