import "./App.css";

// 라우터
import { BrowserRouter, Switch, Route, NavLink } from "react-router-dom";

// 페이지 컴포넌트
import Create from "./pages/create/Create";
import Home from "./pages/home/Home";
import Recipe from "./pages/recipe/Recipe";
import Search from "./pages/search/Search";

// 컴포넌트
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route path="/create">
            <Create />
          </Route>

          <Route path="/search">
            <Search />
          </Route>

          <Route path="/recipe/:id">
            <Recipe />
          </Route>
        </Switch>
      </BrowserRouter>
      )
    </div>
  );
}

export default App;
