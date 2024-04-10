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
            <IconButton 
                aria-label="theme"
                onClick={handleToggleTheme}
            >
                {theme  ? <DarkModeIcon/> : <LightModeIcon/>}
            </IconButton>
        </>
    )
}

export default ThemeToggle