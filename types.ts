import { Questions } from "./src/containers/questions/types"
import { UsersState } from "./src/containers/users/types"

export interface AppState {
    questions: Questions
    users: UsersState
} 