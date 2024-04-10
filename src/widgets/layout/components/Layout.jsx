import { Outlet } from 'react-router-dom';
import { Box } from '@mui/material';
import { Navigation } from '../../../features/navigation';
import { Sidebar } from '../../../features/sidebar';

const Layout = () => {
    return (
        <>
            <Box>
                <Navigation />
            </Box>
            <Box sx={{marginLeft: '10px',  display: 'flex', flexDirection: 'row'}}>
                <Sidebar />
                <Box sx={{ width: '100%', marginTop: '30px', marginLeft: '30px'}}>
                <Outlet />
                </Box>
            </Box>
        </>
    )
}


export default Layout