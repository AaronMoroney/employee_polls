import { Routes, Route } from 'react-router-dom';

import { Auth } from '../../widgets/auth';
import { Home } from '../../widgets/home';
import { Leaderboard } from  '../../widgets/leaderboard'
import { Question } from '../../widgets/questionDetail'
import { Layout } from '../../widgets/layout'
import { Box} from '@mui/material'

function App() {
  return (
    <Box sx={{padding: '2.5% 5%'}}>
      <Routes>
        <Route path='/login' element={<Auth />} />
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='questions/:question_id' element={<Question />} />
          <Route path='leaderboard' element={<Leaderboard />} />
        </Route>
      </Routes>
    </Box>
  );
}

export default App
