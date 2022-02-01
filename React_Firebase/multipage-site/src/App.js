import "./App.css";
import {
  BrowserRouter,
  Route,
  Switch,
  Link,
  NavLink,
  Redirect,
} from "react-router-dom";

// 페이지 컴포넌트
import Homepage from "./pages/Homepage";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Article from "./pages/Article";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <nav>
          <h1>My Articles</h1>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </nav>

        <Switch>
          <Route exact path="/">
            <Homepage />
          </Route>

          <Route path="/about">
            <About />
          </Route>

          <Route path="/contact">
            <Contact />
          </Route>

          <Route path="/articles/:id">
            {/* router parameter 바뀔 수 있다고(changable part)
             이야기해주는것! */}
            <Article />
          </Route>

          <Route path="*">
            {/* 매치가 되지 않는 것들은 모두 다 여기로 */}
            <Redirect to="/" />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
