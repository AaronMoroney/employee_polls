import { combineReducers } from 'redux';

import { questionsReducer } from '../../../containers/questions/reducer';
import { usersReducer } from '../../../containers/users/reducer';

const rootReducer = combineReducers({
  questions: questionsReducer,
  users: usersReducer,
});

export default rootReducer;