import { ActionType } from "./action";

function threadsReducer(threads = [], action = {}) {
    switch (action.type) {
        case ActionType.RECEIVE_THREAD:
            return action.payload.threads;
        case ActionType.ADD_THREAD:
            return [action.payload.thread, ...threads]
        default:
            return threads;
    }
}

export default threadsReducer