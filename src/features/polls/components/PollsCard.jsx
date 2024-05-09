import { Card, Avatar, Box, CardContent, Typography,  Button } from '@mui/material'
import { useTheme } from '@mui/material/styles';
import HowToVoteIcon from '@mui/icons-material/HowToVote';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const PollsCard = (props) => {
    const { questions } = props; 

    let completed = false;
    const theme = useTheme();

    console.log(questions);

    return (
        <>
            <Card 
                sx={{ 
                    padding: '1% 2%', 
                    marginBottom: '2%', 
                    backgroundColor: completed ? theme.palette.background.completedPaper : theme.palette.background.paper
                }}
                variant='outlined'
            >
                <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'  }}>
                    <Box sx={{display: 'flex', alignItems: 'center'}}>
                        <Avatar
                        sx={{ width: 30, height: 30, marginRight: '10px' }}
                        />
                        <p>{`username · 66% engagment`}</p>
                    </Box>
                    <Link
                        to='questions/:5'
                    >
                        <Button>
                            <HowToVoteIcon />
                            VOTE
                        </Button>
                    </Link>
                </Box>
                {/* poll brief */}
                <CardContent >
                    <Typography
                        variant='h5'
                        gutterBottom
                    >
                        Would you rather.. If I Used more shades of black? 
                    </Typography>
                </CardContent>
            </Card>
        </>
    )
}

PollsCard.propTypes = {
    questions: PropTypes.object.isRequired
};

export default PollsCard