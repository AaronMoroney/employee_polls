import { Dispatch } from 'redux';

import { QuestionsAction } from './types';
import { getQuestionsReq } from '../../shared/api/api';

export const getQuestions = () => {
  return async (dispatch: Dispatch<QuestionsAction>) => {
    dispatch({ type: 'FETCH_POSTS_REQUEST' });
    try {
      const data = await getQuestionsReq();
      dispatch({ type: 'FETCH_POSTS_SUCCESS', payload: data });
    } catch {
      dispatch({ type: 'FETCH_POSTS_FAILURE'});
    }
  };
};