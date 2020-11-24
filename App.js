import './App.css';
import Home from './components/Home'
import Overview from './components/Overview'
import Feature from './components/Feature'
import Contact from './components/Contact'

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";



function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/overview" exact component={Overview}/>
        <Route path="/feature" exact component={Feature}/>
        <Route path="/contact" exact component={Contact}/>
      </Switch>
    </Router>
  );
}

export default App;
