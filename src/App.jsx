import { useEffect } from "react";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import ThreadPage from "./pages/ThreadPage";
import LeaderboardPage from "./pages/LeaderboardPage";
import CreatePage from "./pages/CreatePage";
import DetailPage from "./pages/DetailPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import { useDispatch, useSelector } from "react-redux";
import { asyncUnsetAuthUser } from "./states/authUser/action";
import { asyncPreloadProccess } from "./states/isPreload/action";
import Loading from "./components/Loading";

function App() {
  // const [authUser, setAuthUser] = useState(null);
  const { authUser = null, isPreload = false } = useSelector(
    (states) => states
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncPreloadProccess());
  }, [dispatch]);

  const onLogout = () => {
    dispatch(asyncUnsetAuthUser());
  };

  if (isPreload) {
    return null;
  }

  if (authUser === null) {
    return (
      <>
        <Loading />
        <div className="w-6/12 m-auto h-[100vh] flex">
          <Routes>
            <Route path="/*" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
          </Routes>
        </div>
      </>
    );
  }

  return (
    <>
      <Loading />
      <div className="w-10/12 m-auto bg-slate-900 h-[100vh] flex">
        <Navbar authUser={authUser} logout={onLogout} />
        <Routes>
          <Route path="/" element={<ThreadPage />} />
          <Route path="/leaderboard" element={<LeaderboardPage />} />
          <Route path="/create" element={<CreatePage />} />
          <Route path="/threads/:id" element={<DetailPage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
