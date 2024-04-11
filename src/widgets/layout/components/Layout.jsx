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
            <Box className="gparent"sx={{marginLeft: '10px',  display: 'flex', flexDirection: 'row'}}>
                <Sidebar />
                <Box className="parent"sx={{ width: '100%', marginTop: '30px', marginLeft: '30px', marginRight: '30px'}}>
                <Outlet />
                </Box>
                <WidgetBar />
            </Box>
        </>
    )
}


export default Layout