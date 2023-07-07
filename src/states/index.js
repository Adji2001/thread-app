import { configureStore } from "@reduxjs/toolkit";
import threadsReducer from "./threads/reducer";
import usersReducer from "./users/reducer";
import threadDetailReducer from "./threadDetail/reducer";
import leaderboardsReducer from "./leaderboards/reducer";
import authUserReducer from "./authUser/reducer";
import isPreloadReducer from "./isPreload/reducer";
import { loadingBarReducer } from "react-redux-loading-bar";
import threadCommentReducer from "./threadComment/reducer";

const store = configureStore({
    reducer: {
        authUser: authUserReducer,
        isPreload: isPreloadReducer,
        threads: threadsReducer,
        users: usersReducer,
        detailThread: threadDetailReducer,
        leaderboards: leaderboardsReducer,
        loadingBar: loadingBarReducer,
        threadComment: threadCommentReducer,
    }
})

export default store