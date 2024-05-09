import { 
    Card, 
    Avatar,
    Box, 
    CardContent, 
    Typography,  
    Button, 
    Divider
} from '@mui/material'
import { useTheme } from '@mui/material/styles';
import HowToVoteIcon from '@mui/icons-material/HowToVote';
import LooksOneIcon from '@mui/icons-material/LooksOne';
import LooksTwoIcon from '@mui/icons-material/LooksTwo';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

//add css properties into an Object: 

const PollsCard = (props) => {
    const { question } = props; 

    let completed = false;
    const theme = useTheme();

    const votes = question.optionOne.votes.length + question.optionTwo.votes.length;

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
                        <p>{`${question.author} · 66% engagment`}</p>
                    </Box>
                    <Typography>{ `${votes} ${votes > 1 ? 'votes' : 'vote'}`}</Typography>
                </Box>
                {/* poll brief */}
                <CardContent sx={{padding: '4px 16px'}} >
                    <Typography
                        gutterBottom
                    >
                        Would you rather?
                    </Typography>
                    <Divider sx={{marginBottom: '10px'}}/>
                    <Box sx={{display: 'flex', alignItems: 'center'}}>
                    <LooksOneIcon />
                        <Typography
                            variant='h6'
                        >
                            {question.optionOne.text}
                        </Typography>
                    </Box>
                    <Box sx={{display: 'flex', alignItems: 'center'}}>
                    <LooksTwoIcon />
                        <Typography
                            variant='h6'
                        >
                            {question.optionTwo.text}
                        </Typography>
                    </Box>
                    {/* <Divider sx={{marginTop: '10px'}}/> */}
                </CardContent>
                <Box sx={{display: 'flex', flexDirection: 'row', justifyContent: 'flex-end'}}>
                    <Link to='questions/:5' >
                            <Button>
                                <HowToVoteIcon />
                                VOTE
                            </Button>
                    </Link>
                </Box>
            </Card>
        </>
    )
}

PollsCard.propTypes = {
    question: PropTypes.object.isRequired
};

export default PollsCard