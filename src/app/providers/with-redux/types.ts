import { QuestionsState } from "../../../entities/questions/model/types"
import { UsersState } from "../../../entities/users/model/types"

export interface AppState {
    questions: QuestionsState
    users: UsersState
} 