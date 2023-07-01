import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import ThreadPage from "./pages/ThreadPage";
import LeaderboardPage from "./pages/LeaderboardPage";
import CreatePage from "./pages/CreatePage";
import DetailPage from "./pages/DetailPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import { useDispatch, useSelector } from "react-redux";
import { asyncSetAuthUser } from "./states/authUser/action";
import { asyncPreloadProccess } from "./states/isPreload/action";

function App() {
  // const [authUser, setAuthUser] = useState(null);
  const { authUser = null, isPreload = false } = useSelector(
    (states) => states
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncPreloadProccess());
  }, [dispatch]);

  if (isPreload) {
    return null;
  }

  if (authUser === null) {
    return (
      <div className="w-6/12 m-auto h-[100vh] flex">
        <Routes>
          <Route path="/*" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Routes>
      </div>
    );
  }

  return (
    <div className="w-10/12 m-auto bg-slate-900 h-[100vh] flex">
      <Navbar />
      <Routes>
        <Route path="/" element={<ThreadPage />} />
        <Route path="/leaderboard" element={<LeaderboardPage />} />
        <Route path="/create" element={<CreatePage />} />
        <Route path="/threads/:id" element={<DetailPage />} />
      </Routes>
    </div>
  );
}

export default App;
