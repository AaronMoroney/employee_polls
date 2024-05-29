export type Question = {
    votes: string[],
    text: string
};

export interface Questions {
    id: string;
    author: string;
    timestamp: number;
    optionOne: Question;
    optionTwo: Question;
};

export interface QuestionsState {
    questions: Record<string, Questions>;
}
 
export type QuestionsAction =
    | { type: 'FETCH_POSTS_REQUEST' }
    | { type: 'FETCH_POSTS_SUCCESS'; payload: Record<string, Questions> }
    | { type: 'FETCH_POSTS_FAILURE' };