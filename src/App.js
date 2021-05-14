import React from "react";
import { BrowserRouter as Router, Route} from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Footer from "./components/Footer";
import Portfolio from "./components/Portfolio";
import Project from "./components/Project";

function App() {
  return (
    <div>
      <Router>
      <Navbar />
          <Route exact path="/">
            <About />
          </Route>
          <Route exact path="/contact">

          </Route>
          <Route exact path="/portfolio">
            <Portfolio/>
          </Route>
        <Footer />
      </Router>
    </div>
  );
}

export default App;