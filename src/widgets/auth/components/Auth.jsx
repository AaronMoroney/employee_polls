import { useState } from 'react';
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
            <Box sx={{ border: 'slategray 1px solid', borderRadius: '10px', width: 'auto', padding: '1%'}}>
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
        </>
        
    );
};

export default Auth;
