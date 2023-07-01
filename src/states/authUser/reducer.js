import { ActionType } from "./action";

function authUserReducer(authUer = null, action = {}) {
    switch (action.type) {
        case ActionType.SET_AUTH_USER:
            return action.payload.authUer;
        case ActionType.UNSET_AUTH_USER:
            return null;
        default:
            return authUer;
    }
}

export default authUserReducer