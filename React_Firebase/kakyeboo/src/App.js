import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { useAuthContext } from "./hooks/useAuthContext";

import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import SignUp from "./pages/SignUp/SignUp";
import Navbar from "./Components/Navbar";

function App() {
  {
    /* 어쓰 상태 기준으로 조건부 렌더링&가드  */
  }
  const { authIsReady, user } = useAuthContext();
  return (
    <div className="App">
      {authIsReady ? (
        <BrowserRouter>
          <Navbar />
          <Switch>
            <Route exact path="/">
              {user ? <Home /> : <Redirect to="/login" />}
            </Route>
            <Route path="/login">
              {user ? <Redirect to="/" /> : <Login />}
            </Route>
            <Route path="/signup">
              {user ? user.displayName && <Redirect to="/" /> : <SignUp />}
            </Route>
          </Switch>
        </BrowserRouter>
      ) : null}
    </div>
  );
}

export default App;
