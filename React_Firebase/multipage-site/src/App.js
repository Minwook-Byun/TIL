import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";

// 페이지 컴포넌트
import Homepage from "./pages/Homepage";
import Contact from "./pages/Contact";
import About from "./pages/About";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <nav>
          <h1>My Articles</h1>
        </nav>

        <Route path="/">
          <Homepage />
        </Route>

        <Route path="/about">
          <About />
        </Route>

        <Route path="/contact">
          <Contact />
        </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
