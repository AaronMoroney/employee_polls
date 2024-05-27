import { useState } from 'react';

import '../../../css/index.css';
import { Form } from '../../../features/auth';
import { Dropdown } from '../../../features/auth';
import { Box, Link, Button } from '@mui/material';

const Auth = () => {
    const [isNewMember, setIsNewMember] = useState(true);

    const handleMemberStatus = () => {
        setIsNewMember(!isNewMember);
    };

    return (
        <>
            <Box sx={{display: 'flex', flexDirection: 'column', width: '100%', justifyContent: 'center', alignItems: 'center'}}>
                <Box sx={{ border: 'slategray 1px solid', borderRadius: '10px', width: '25%', padding: '1%'}}>
                    <h2>{isNewMember ? 'Login' : 'Signup'}</h2>
                    <Link onClick={handleMemberStatus}>
                        <p>{isNewMember ? 'Not a member? Signup' : 'Already a member? Login'}</p>
                    </Link>
                    {isNewMember ? (
                        <>
                            <Form isNewMember={isNewMember} />
                            <Button>Login</Button>
                            <Dropdown />
                        </>
                    ) : (
                        <>
                            <Form isNewMember={isNewMember} />
                            <Button>Signup</Button>
                        </>
                    )}
                </Box>
                <p>Note: This is a demo app, so feel free to auto-signin with a pre-made user</p>
            </Box>
            
        </>
    );
};

export default Auth;
