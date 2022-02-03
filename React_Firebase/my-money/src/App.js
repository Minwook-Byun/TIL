import { BrowserRouter, Switch, Route } from "react-router-dom";

// 컴포넌트
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import SignUP from "./pages/signup/SignUP";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route>
            <Login path="/login" />
          </Route>

          <Route path="/signup">
            <SignUP />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
