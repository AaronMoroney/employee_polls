import {
    FormControlLabel, 
} from '@mui/material'
import { PollsStatusSwitch } from '../style/PollsStatusStyle'


const PollsSwitch = () => {
    return (
        <>
            <FormControlLabel
                control={<PollsStatusSwitch  />}
                label="Show Complete"
            />
        </>
    )
}


export default PollsSwitch