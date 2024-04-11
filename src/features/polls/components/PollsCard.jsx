import { Card, Avatar, Box, CardContent, Typography,  Button } from '@mui/material'
import HowToVoteIcon from '@mui/icons-material/HowToVote';

import { useTheme } from '@mui/material/styles';

const PollsCard = () => {
    let completed = false;
    const theme = useTheme();

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
                    <Button>
                            <HowToVoteIcon />
                            VOTE
                    </Button>
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

export default PollsCard

// The details of the poll are available at questions/:question_id.

// When a poll is clicked on the home page, the following is shown:

// the text “Would You Rather”
// the avatar of the user who posted the polling question; and
// the two options.

// For answered polls, each of the two options contains the following:
// the text of the option;
// the number of people who voted for that option;
// the percentage of people who voted for that option.

// The option selected by the logged in user should be clearly marked.
// When the user is logged in, the details of the poll are shown. If the user is logged out, he/she is asked to log in before before being able to access the poll.
// The application asks the user to sign in and shows a 404 page if that poll does not exist. (In other words, if a user creates a poll and then the same or another user tries to access that poll by its url, the user should be asked to sign in and then be shown a 404 page. Please keep in mind that new polls will not be accessible at their url because of the way the backend is set up in this application.)