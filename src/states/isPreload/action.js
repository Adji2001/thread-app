import api from "../../utils/api"
import { setAuthUserActionCreator } from "../authUser/action"

const ActionType = {
    SET_IS_PRELOAD: 'SET_IS_PRELOAD'
}

function setIsPreloadActionCreator(isPreload) {
    return {
        type: ActionType.SET_IS_PRELOAD,
        payload: {
            isPreload
        }
    }
}

// function thunk
function asyncPreloadProccess() {
    return async (dispatch) => {
        try {
            const authUser = await api.getOwnProfile()
            dispatch(setAuthUserActionCreator(authUser))
        } catch (error) {
            dispatch(setIsPreloadActionCreator(null))
        } finally {
            dispatch(setIsPreloadActionCreator(false))
        }
    }
}

export {
    ActionType,
    setIsPreloadActionCreator,
    asyncPreloadProccess
}