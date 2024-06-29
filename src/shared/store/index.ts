import { legacy_createStore as createStore, applyMiddleware} from 'redux'
import { thunk } from 'redux-thunk';

import rootReducer from 'app/providers/with-redux/reducer';

export const store = createStore(
    rootReducer,
    undefined,
    applyMiddleware(thunk)
);