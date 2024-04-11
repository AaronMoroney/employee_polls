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

const Menu = () => {
    return (
        <>
            <MenuList sx={{height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', width: '10vw'}}>
                <div>
                    <Link 
                        to="/" 
                        style={{ textDecoration: 'none', color: 'inherit'}}
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
                        style={{ textDecoration: 'none', color: 'inherit'}}
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
                    
                    <Link to="/leaderboard" style={{ textDecoration: 'none', color: 'inherit' }}>
                        <MenuItem>
                            <ListItemIcon>
                                <LeaderboardIcon fontSize="small" />
                            </ListItemIcon>
                            <ListItemText>Leaderboard</ListItemText>
                        </MenuItem>
                    </Link>
           
                    <Link to="/settings" style={{ textDecoration: 'none', color: 'inherit' }}>
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