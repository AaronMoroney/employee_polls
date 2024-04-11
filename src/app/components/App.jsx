import { Routes, Route } from 'react-router-dom';

import { Auth } from '../../pages/auth';
import { Home } from '../../pages/home';
import { Leaderboard } from  '../../pages/leaderboard'
import { Question } from '../../pages/question'
import { Settings } from '../../pages/settings'
import { Create } from '../../pages/create'
import { Layout } from '../../widgets/layout'
import { Box} from '@mui/material'

// REVIEW ALL WIDGETS!
// REVIEW ALL PAGES!
// REVIEW ALL FEATURES!
// **for: helpers, hooks, correct structure, unneccessary comments**


function App() {
  return (
    <Box sx={{padding: '2.5% 5%'}}>
      <Routes>
        <Route path='/login' element={<Auth />} />
        <Route element={<Layout />}>
          <Route path='/' element={<Home />} />
          <Route path='questions/:question_id' element={<Question />} />
          <Route path='/settings' element={<Settings />} />
          <Route path='/leaderboard' element={<Leaderboard />} />
          <Route path='/create' element={<Create />} />
        </Route>
      </Routes>
    </Box>
  );
}
export default App