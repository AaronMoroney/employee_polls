import { useEffect } from 'react';
import { ThunkDispatch } from 'redux-thunk';
import { useSelector } from 'react-redux';
import { 
    List, 
    ListItem, 
    ListItemButton, 
    ListItemText, 
    ListItemAvatar, 
    Checkbox, 
    Avatar
} from '@mui/material';

import { useDispatch } from 'react-redux';
import { getUsers } from 'entities/users/model/actions';
import { UsersAction } from 'entities/users/model/types';
import { AppState } from 'app/providers/with-redux/types';

const Dropdown = () => {
    const dispatch = useDispatch<ThunkDispatch<{}, {}, UsersAction>>();

    useEffect(() => {
        dispatch(getUsers());
    }, [dispatch]);

    const users = useSelector((state: AppState) => state.users.users);

    return (
        <>
            <p>Pre-made users</p>
            <List 
                dense 
                sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
            >
                {(users ? Object.keys(users) : []).map((userId) => {
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