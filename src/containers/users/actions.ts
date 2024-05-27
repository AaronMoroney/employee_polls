import { Dispatch } from 'redux';

import { UsersAction } from './types';
import { getUsersReq } from '../../shared/api/api';

export const getUsers = () => {
  return async(dispatch: Dispatch<UsersAction>) => {
    dispatch({type: 'FETCH_USERS_REQUEST'});
    try{
      const data = await getUsersReq();
      dispatch({ type: 'FETCH_USERS_SUCCESS', payload: data})
    } catch {
      dispatch({ type: 'FETCH_USERS_FAILURE'})
    }
  };
}