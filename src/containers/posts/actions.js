import { API } from '../../shared/constants/API';

export function getUsers() {
    return fetch(`${API}/users`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch users');
        }
        return response.json();
      })
      .then(users => {
        return users;
      })
      .catch(error => {
        console.error('Error fetching users:', error);
        throw error;
    });
}

// export function getQuestions() {
//     return fetch(`${API}/questions`)
//       .then(response => {
//         if (!response.ok) {
//           throw new Error('Failed to fetch users');
//         }
//         return response.json();
//       })
//       .then(questions => {
//         return questions;
//       })
//       .catch(error => {
//         console.error('Error fetching users:', error);
//         throw error; 
//     });
// }

export const getQuestions = () => {
  return async (dispatch) => {
    dispatch({ type: 'FETCH_POSTS_REQUEST' });
    try {
      const response = await fetch(`${API}/questions`);
      const data = await response.json();
      dispatch({ type: 'FETCH_POSTS_SUCCESS', payload: data });
    } catch (error) {
      dispatch({ type: 'FETCH_POSTS_FAILURE', payload: error.message });
    }
  };
};
