import { useEffect, useState } from 'react';
import { _getUsers } from '../../../data/_DATA';
import { 
    List, 
    ListItem, 
    ListItemButton, 
    ListItemText, 
    ListItemAvatar, 
    Checkbox, 
    Avatar
} from '@mui/material';

const Dropdown = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        _getUsers().then(data => {
            setUsers(data);
        })
    }, []);

    useEffect(() => {
        console.log(users);
    })

    return (
        <>
            <p>Pre-made users</p>
            <List 
                dense 
                sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
            >
                {Object.keys(users).map((userId) => {
                    const user = users[userId]
                    const labelId = `checkbox-list-secondary-label-${userId}`;
                    return (
                    <ListItem
                        key={userId}
                        secondaryAction={
                        <Checkbox
                            edge="end"
                            // onChange={handleToggle(value)}
                            // checked={checked.indexOf(value) !== -1}
                            // inputProps={{ 'aria-labelledby': labelId }}
                        />
                        }
                        disablePadding
                    >
                        <ListItemButton>
                            <ListItemAvatar>
                                <Avatar
                                // alt={`Avatar n°${value + 1}`}
                                // src={`/static/images/avatar/${value + 1}.jpg`}
                                />
                            </ListItemAvatar>
                            <ListItemText 
                                id={labelId} 
                                primary={user.name}
                            >
                            </ListItemText>
                        </ListItemButton>
                    </ListItem>
                    );
                })}
            </List>
        </>
    )
}

export default Dropdown