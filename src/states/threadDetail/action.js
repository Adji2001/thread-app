import api from "../../utils/api"

const ActionType = {
    RECEIVE_DETAIL_THREAD: 'RECEIVE_DETAIL_THREAD',
    CLEAR_DETAIL_THREAD: 'CLEAR_DETAIL_THREAD'
}

function receiveDetailThreadActionCreator(detailThread) {
    return {
        type: ActionType.RECEIVE_DETAIL_THREAD,
        payload: {
            detailThread
        }
    }
}

function clearDetailThreadActionCreator() {
    return {
        type: ActionType.CLEAR_DETAIL_THREAD
    }
}

// function thunk
function asyncReceiveThreadDetail(threadId) {
    return async (dispatch) => {
        clearDetailThreadActionCreator()
        try {
            const detailThread = await api.getThreadDetail(threadId)
            dispatch(receiveDetailThreadActionCreator(detailThread))
        } catch (error) {
            alert(error.message)
        }
    }
}

export {
    ActionType,
    receiveDetailThreadActionCreator,
    clearDetailThreadActionCreator,
    asyncReceiveThreadDetail
}