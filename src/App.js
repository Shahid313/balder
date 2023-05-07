import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Kontakt from './pages/Kontakt';
import Strategi from './pages/Strategi';
import Utveckling from './pages/Utveckling';
import Footer from './components/Footer.js';
import "./components/Footer.css"
import Marknadsforing from "./pages/Marknadsforing";



function App() {
  
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/kontakt" exact component={Kontakt} />
        <Route path="/strategi" exact component={Strategi} />
        <Route path="/affärsutveckling" exact component={Utveckling} />
        <Route path="/marknadsforing" exact component={Marknadsforing} />
      </Switch>
      < Footer />
    </Router>
  );
}

export default App;
