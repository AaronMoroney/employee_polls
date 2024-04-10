import { 
    Avatar, 
    Box, 
    Paper, 
} from '@mui/material'

const Navigation = () => {

    return (
        <Paper
            sx={{padding: '1% 3%',  borderRadius: '30px' }}
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
                </Box>
            </Box>
        </Paper>
    )
}

export default Navigation