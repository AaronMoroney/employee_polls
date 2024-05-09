const initialState = {
    questions: {}, 
    isLoading: false, 
}

export const questionsReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_POSTS_REQUEST':
            return { ...state, isLoading: true };
        case 'FETCH_POSTS_SUCCESS':
            return { ...state, isLoading: false, questions: action.payload };
        case 'FETCH_POSTS_FAILURE':
            return { ...state, isLoading: false };
        default:
            return state;
    }
}