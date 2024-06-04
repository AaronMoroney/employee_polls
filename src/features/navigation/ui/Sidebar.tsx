import { 
    Paper, 
} from "@mui/material";

import Menu  from './Menu'
    
const Sidebar = () => {
    return (
        <>
            <Paper
                sx={{ 
                    height: '70vh', 
                    width: '20vh', 
                    marginTop: '30px', 
                    borderRadius: '30px', 
                    display: 'flex', 
                    flexDirection: 'column',
                    justifyContent: 'center', 
                    padding: '10px'
                }}
            >
                <Menu />
            </Paper>
        </>
    );
}

export default Sidebar