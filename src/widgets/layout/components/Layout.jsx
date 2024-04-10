import { Outlet } from 'react-router-dom';
import { Box } from '@mui/material';
import { Navigation } from '../../../features/navigation';
import { Sidebar } from '../../../features/sidebar';
import { WidgetBar } from '../../../features/sidebar';
import { ThemeToggle } from '../../../features/theme'

const Layout = () => {
    return (
        <>
            <ThemeToggle/>
            <Box>
                <Navigation />
            </Box>
            <Box sx={{marginLeft: '10px',  display: 'flex', flexDirection: 'row'}}>
                <Sidebar />
                <Box sx={{ width: '100%', marginTop: '30px', marginLeft: '30px'}}>
                <Outlet />
                </Box>
                <WidgetBar />
            </Box>
        </>
    )
}


export default Layout