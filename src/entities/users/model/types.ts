export type UserAnswers = {
  [key: number]: "optionOne" | "optionTwo";
};

export interface User {
  id: string;
  password: string;
  name: string;
  avatarURL: null;
  answers: UserAnswers;
  questions: string[];
}

export interface UsersState {
  users: Record<string, User>;
}

export type UsersAction =
  | { type: "FETCH_USERS_REQUEST" }
  | { type: "FETCH_USERS_SUCCESS"; payload: Record<string, User> }
  | { type: "FETCH_USERS_FAILURE" };
