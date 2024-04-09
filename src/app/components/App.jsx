import { Routes, Route } from 'react-router-dom';

import '../../css/App.css';
import { Auth } from '../../widgets/auth';
import { Home } from '../../widgets/home';
import { Leaderboard } from  '../../widgets/leaderboard'
import { Question } from '../../widgets/questionDetail'

function App() {
  return (
    <>
      <h1>Employee Polls</h1>
        <Routes>
          <Route
            path = '/'
            element={<Home />} 
          />
          <Route
            path = '/login'
            element={<Auth/>} 
          />
          <Route
            path = '/questions/:question_id'
            element={<Question />} 
          />
          <Route
            path = '/leaderboard'
            element={<Leaderboard />} 
          />
        </Routes>
    </>
  )
}

export default App
