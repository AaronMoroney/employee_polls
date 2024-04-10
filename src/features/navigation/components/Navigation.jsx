import { 
    Avatar, 
    Box, 
    IconButton, 
    Paper, 
} from '@mui/material'
import SettingsIcon from '@mui/icons-material/Settings';

const Navigation = () => {

    return (
        <Paper
            sx={{padding: '1%',  borderRadius: '30px' }}
            variant="outlined"
        >
            <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
                <h1 className='logo'>
                    Employee-polls
                </h1> 
                <Box sx={{display: 'flex',  alignItems: 'center', justifyContent: 'center' }}>
                    <p>username</p>
                    <Avatar
                     sx={{ width: 56, height: 56, marginLeft: '10px' }}
                    />
                    <IconButton>
                        <SettingsIcon />
                    </IconButton>
                </Box>
            </Box>
        </Paper>
    )
}

export default Navigation