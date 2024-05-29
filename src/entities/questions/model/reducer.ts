import { QuestionsAction, Questions } from './types'

const initialQuestionsState = {
    questions: {} as Record<string, Questions>, 
    votes: [], 
    text: '',
}

export const questionsReducer = (state = initialQuestionsState, action: QuestionsAction) => {
    switch (action.type) {
        case 'FETCH_POSTS_REQUEST':
            return { ...state };
        case 'FETCH_POSTS_SUCCESS':
            return { ...state,  questions: action.payload };
        case 'FETCH_POSTS_FAILURE':
            return { ...state,  };
        default:
            return state;
    }
}
