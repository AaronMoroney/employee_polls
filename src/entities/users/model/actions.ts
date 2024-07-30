import { createAction } from "@reduxjs/toolkit";

import { UsersAction } from "./types";

export const fetchUserRequest = createAction<UsersAction>(
  "FETCH_USERS_REQUEST"
);
export const fetchUserSuccess = createAction<UsersAction>(
  "FETCH_USERS_SUCCESS"
);
export const fetchUserError = createAction<UsersAction>("FETCH_USERS_ERROR");

// export const getUsers = () => {
//   return async(dispatch: Dispatch<UsersAction>) => {
//     dispatch({type: 'FETCH_USERS_REQUEST'});
//     try{
//       const data = await getUsersReq();
//       dispatch({ type: 'FETCH_USERS_SUCCESS', payload: data})
//     } catch {
//       dispatch({ type: 'FETCH_USERS_FAILURE'})
//     }
//   };
// }
