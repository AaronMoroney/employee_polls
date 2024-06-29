import { combineReducers } from 'redux';

import { questionsReducer } from 'entities/questions/model/reducer';
import { usersReducer } from 'entities/users/model/reducer';

const rootReducer = combineReducers({
  questions: questionsReducer,
  users: usersReducer,
});

export default rootReducer;