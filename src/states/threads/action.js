import api from "../../utils/api"

const ActionType = {
    RECEIVE_THREAD: 'RECEIVE_THREAD',
    ADD_THREAD: 'ADD_THREAD',
}

function receiveThreadActionCreator(threads) {
    return {
        type: ActionType.RECEIVE_THREAD,
        payload: {
            threads
        }
    }
}

function addThreadActionCreator(thread) {
    return {
        type: ActionType.ADD_THREAD,
        payload: {
            thread
        }
    }
}

function asyncAddThread({title, body, category = ''}) {
    return async (dispatch) => {
        try {
            const thread = await api.createThread({title, body, category})
            dispatch(addThreadActionCreator(thread))
        } catch (error) {
            alert(error.message)
        }
    }
}



export {ActionType, receiveThreadActionCreator, asyncAddThread}