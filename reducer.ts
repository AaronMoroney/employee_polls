import { combineReducers } from 'redux';

import { questionsReducer } from './src/containers/questions/reducer';
import { usersReducer } from './src/containers/users/reducer';

const rootReducer = combineReducers({
  questions: questionsReducer,
  users: usersReducer,
});

export default rootReducer;