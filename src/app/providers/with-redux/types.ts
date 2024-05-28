import { Questions } from "../../../containers/questions/types"
import { UsersState } from "../../../containers/users/types"

export interface AppState {
    questions: Questions
    users: UsersState
} 