import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Footer from "./components/Footer";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Route exact path="/">
          <About />
        </Route>
        <Route exact path="/contact">
          <Contact />
        </Route>
        <Route exact path="/portfolio">
          <Portfolio />
        </Route>
        <Footer />
      </Router>
    </div>
  );
}

export default App;