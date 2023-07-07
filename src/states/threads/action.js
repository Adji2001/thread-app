import api from "../../utils/api"
import { hideLoading, showLoading } from "react-redux-loading-bar"

const ActionType = {
    RECEIVE_THREAD: 'RECEIVE_THREAD',
    ADD_THREAD: 'ADD_THREAD',
    UP_VOTE_THREAD: 'UP_VOTE_THREAD',
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

function upVoteThreadActionCreator({threadId, userId}) {
    return {
        type: ActionType.UP_VOTE_THREAD,
        payload: {
            threadId,
            userId
        }
    }
}

// function thunk
function asyncAddThread({title, body, category = ''}) {
    return async (dispatch) => {
        dispatch(showLoading())
        try {
            const thread = await api.createThread({title, body, category})
            dispatch(addThreadActionCreator(thread))
        } catch (error) {
            alert(error.message)
        }
        dispatch(hideLoading())
    }
}

function asyncUpVoteThread(threadId) {
    return async (dispatch, getState) => {
        dispatch(showLoading())
        const authUser = getState()
        dispatch(upVoteThreadActionCreator({threadId, userId: authUser.id}))

        try {
            await api.upVoteThread(threadId)
        } catch (error) {
            alert(error.message)
            dispatch(upVoteThreadActionCreator({threadId, userId: authUser.id}))
        }
        dispatch(hideLoading())
    }
}



export {ActionType, receiveThreadActionCreator, asyncAddThread, asyncUpVoteThread}