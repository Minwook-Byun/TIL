import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { useAuthContext } from "./hooks/useAuthContext";

// 컴포넌트
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/SignUP";
import Navbar from "./components/Navbar";

function App() {
  const { authIsReady, user } = useAuthContext();
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
            {/* 로그인이 되어 있지 않으면 로그인으로 */}
            {/* {!user && <Redirect to="/login" />} */}
            {/* {user && <Home />} */}
          </Route>
          <Route path="/login">
            <Login />
            {/* {user && <Redirect to="/" />} */}
            {/* {!user && <Login />} */}
          </Route>
          <Route path="/signup">
            <Signup />
            {/* {user && <Redirect to="/" />} */}
            {/* {!user && <Signup />} */}
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
