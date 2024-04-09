import PropTypes from 'prop-types';

import {
    FormControl,
    TextField, 
    Box
} from '@mui/material';


const Form = ({ isNewMember }) => {
    // const [showPassword, setShowPassword] = useState(false);

    // const handleClickShowPassword = () => setShowPassword((show) => !show);

    // const handleMouseDownPassword = (event) => {
    //     event.preventDefault();
    // };

    return (
        <>
        <Box sx={{ display: 'flex', flexWrap: 'wrap'}}>
            <FormControl>
                <TextField
                    label="Create user account"
                    sx={{ m: 1, width: '25ch' }}
                />
                <TextField
                    label="Password"
                    sx={{ m: 1, width: '25ch' }}
                />
                {!isNewMember &&
                    <TextField
                        label="Confirm password"
                        sx={{ m: 1, width: '25ch' }}
                    />
                }
            </FormControl>
        </Box>
         
        </>
    )
}

Form.propTypes = {
    isNewMember: PropTypes.bool.isRequired,
};

export default Form