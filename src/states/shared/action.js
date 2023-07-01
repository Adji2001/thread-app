import api from "../../utils/api"
import { receiveLeaderboardsActionCreator } from "../leaderboards/action"
import { receiveThreadActionCreator } from "../threads/action"
import { receiveUsersActionCreator } from "../users/action"

function asyncPopulateUsersAndThreadsAndLeaderboards() {
    return async (dispatch) => {
        try {
            const users = await api.getAllUsers()
            const threads = await api.getAllThreads()
            const leaderboards = await api.getAllLeaderboards()
            
            dispatch(receiveUsersActionCreator(users))
            dispatch(receiveThreadActionCreator(threads))
            dispatch(receiveLeaderboardsActionCreator(leaderboards))
        } catch (error) {
            alert(error.message)
        }
    }
}

export {asyncPopulateUsersAndThreadsAndLeaderboards}