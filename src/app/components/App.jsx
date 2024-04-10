import { Routes, Route } from 'react-router-dom';

import { Auth } from '../../widgets/auth';
import { Home } from '../../widgets/home';
import { Leaderboard } from  '../../widgets/leaderboard'
// import { Question } from '../../widgets/questionDetail'
import { Settings } from '../../widgets/settings'
import { Create } from '../../widgets/create'
import { Layout } from '../../widgets/layout'
import { Box} from '@mui/material'

function App() {
  return (
    <Box sx={{padding: '2.5% 5%'}}>
      <Routes>
        <Route path='/login' element={<Auth />} />
        <Route element={<Layout />}>
          <Route path='/' element={<Home />} />
          {/* <Route path='question_id' element={<Question />} /> */}
          <Route path='/settings' element={<Settings />} />
          <Route path='/leaderboard' element={<Leaderboard />} />
          <Route path='/create' element={<Create />} />
        </Route>
      </Routes>
    </Box>
  );
}
export default App