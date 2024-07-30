import { createAction } from '@reduxjs/toolkit';

import { QuestionsAction } from './types';

export const fetchPostsRequest = createAction<QuestionsAction>('FETCH_USERS_REQUEST');
export const fetchPostsSuccess = createAction<QuestionsAction>('FETCH_USERS_SUCCESS');
export const fetchPostsError = createAction<QuestionsAction>('FETCH_USERS_ERROR');

// export const getQuestions = () => {
//   return async (dispatch: Dispatch<QuestionsAction>) => {
//     dispatch({ type: 'FETCH_POSTS_REQUEST' });
//     try {
//       const data = await getQuestionsReq();
//       dispatch({ type: 'FETCH_POSTS_SUCCESS', payload: data });
//     } catch {
//       dispatch({ type: 'FETCH_POSTS_FAILURE'});
//     }
//   };
// };