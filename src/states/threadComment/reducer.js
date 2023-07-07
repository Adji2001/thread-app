import { ActionType } from "./action";

function threadCommentReducer(comments = [], action = {}) {
    switch (action) {
        case ActionType.RECEIVE_COMMENT:
            return action.payload.comments;
        case ActionType.ADD_COMMENT_THREAD:
            return [action.payload.comment, ...comments];
        default:
            return comments;
    }
}

export default threadCommentReducer