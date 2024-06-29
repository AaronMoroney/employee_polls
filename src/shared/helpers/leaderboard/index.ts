import { User } from "../../../entities/users/model/types";

export const getUserEngagementScore = (answers: {}, questions: string[]) => {
    const questionsTally = questions.length;
    const answersTally = Object.keys(answers).length;
    const engagement = questionsTally + answersTally
  
    return engagement
}
  
export const findUserPosition = (users: Record<string, User>) => {
    const SCORE = Object.keys(users).map((userId) => {
        const user = users?.[userId];
        getUserEngagementScore(user.answers, user.questions);
        return user;
    })
  
    return SCORE.sort();
}