import { Routes, Route } from 'react-router-dom';

import { Auth } from '../../widgets/auth';
import { Home } from '../../widgets/home';
import { Leaderboard } from  '../../widgets/leaderboard'
import { Question } from '../../widgets/questionDetail'

function App() {
  return (
    <>
      <header className='header'>
        <h1>Employee Polls</h1>
      </header>
      <div className='body-content'>
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
      </div>
    </>
  )
}

export default App
