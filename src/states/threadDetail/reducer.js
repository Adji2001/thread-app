import { ActionType } from "./action";

function threadDetailReducer(detailThread = null, action = {}) {
    switch (action.type) {
        case ActionType.RECEIVE_DETAIL_THREAD:
            return action.payload.detailThread;
        case ActionType.CLEAR_DETAIL_THREAD:
            return null;
        default:
            return detailThread;
    }
}

export default threadDetailReducer