import { useState } from 'react';

import {
    IconButton
} from '@mui/material'
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';

const ThemeToggle = () => {
    const [theme, setTheme] = useState(true);

    const handleToggleTheme = () => {
        setTheme(!theme);
    }
    return (
        <>  
            <div style={{ display: 'flex',  flexDirection: 'row'  }}>
                <p>Toggle Theme</p>
                <IconButton 
                    aria-label="theme"
                    onClick={handleToggleTheme}
                >
                    {theme  ? <DarkModeIcon/> : <LightModeIcon/>}
                </IconButton>
            </div>
        </>
    )
}

export default ThemeToggle