import { Link } from 'react-router-dom';
import { 
    MenuItem, 
    MenuList,
    ListItemIcon, 
    ListItemText, 
    Typography, 
} from "@mui/material";
import LeaderboardIcon from '@mui/icons-material/Leaderboard';
import AddIcon from '@mui/icons-material/Add';
import LogoutIcon from '@mui/icons-material/Logout';
import SettingsIcon from '@mui/icons-material/Settings';
import HomeIcon from '@mui/icons-material/Home';

const styles = {
    MenuList :{
        height: '100%', 
        display: 'flex', 
        flexDirection: 'column', 
        justifyContent: 'space-between', 
        width: '10vw'
    },
    linkStyle :{
        textDecoration: 'none', 
        color: 'inherit'
    }
}

const Menu = () => {
    return (
        <>
            <MenuList sx={styles.MenuList}>
                <div>
                    <Link 
                        to="/" 
                        style={styles.linkStyle}
                    >
                        <MenuItem>
                            <ListItemIcon>
                                <HomeIcon fontSize="small" />
                            </ListItemIcon>
                            <ListItemText>Home</ListItemText>
                        </MenuItem>
                    </Link>
                    <Link 
                        to="/create" 
                        style={styles.linkStyle}
                    >
                        <MenuItem>
                            <ListItemIcon>
                                <AddIcon fontSize="small" />
                            </ListItemIcon>
                            <ListItemText>Create</ListItemText>
                            <Typography variant="body2" color="text.secondary">
                                ⌘N
                            </Typography>
                        </MenuItem>
                    </Link>
                    
                    <Link to="/leaderboard" style={styles.linkStyle}>
                        <MenuItem>
                            <ListItemIcon>
                                <LeaderboardIcon fontSize="small" />
                            </ListItemIcon>
                            <ListItemText>Leaderboard</ListItemText>
                        </MenuItem>
                    </Link>
           
                    <Link to="/settings" style={styles.linkStyle}>
                        <MenuItem>
                            <ListItemIcon>
                                <SettingsIcon />
                            </ListItemIcon>
                            <ListItemText>Settings</ListItemText>
                        </MenuItem>
                    </Link>
                </div>
                <div>
                    <MenuItem>
                        <ListItemIcon>
                            <LogoutIcon />
                        </ListItemIcon>
                        <ListItemText>Logout</ListItemText>
                    </MenuItem>
                </div>
            </MenuList>
        </>
    )
}

export default Menu