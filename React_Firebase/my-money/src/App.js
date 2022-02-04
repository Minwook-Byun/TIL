import { BrowserRouter, Switch, Route } from "react-router-dom";

// 컴포넌트
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/SignUP";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route>
            <Login path="/login" />
          </Route>
          <Route path="/회원가입">
            <Signup />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
