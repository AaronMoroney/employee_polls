
import { Outlet } from 'react-router-dom';
import { Box } from '@mui/material';
import { Navigation } from '../../../features/navigation';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate, useLocation } from 'react-router-dom';

import { Sidebar } from '../../../features/sidebar';
import { WidgetBar } from '../../../features/sidebar';
import { ThemeToggle } from '../../../features/theme'

const Layout = () => {

    const navigate = useNavigate();
    const location = useLocation();

    const handleBack = () => {
        navigate(-1);
    } 

    return (
        <>
            <ThemeToggle/>
            <Box>
                <Navigation />
            </Box>
            <Box sx={{ marginLeft: '10px',  display: 'flex', flexDirection: 'row' }}>
                <Sidebar
                />
                <Box sx={{ width: '100%', marginTop: '30px', marginLeft: '30px', marginRight: '30px' }}>
                    <Box sx={{ borderLeft: '1px slategrey solid', borderRight: '1px slategrey solid',  height: '100%', padding: '0px 35px' }}>
                    { location.pathname !== '/' && location.pathname  !== '/create' &&
                        <ArrowBackIcon 
                            onClick={handleBack}
                        />
                    }    
                    <Outlet 
                    />
                    </Box>
                </Box>
                <WidgetBar />
            </Box>
        </>
    )
}

export default Layout