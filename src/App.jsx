import React from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Countries from './pages/Countries.jsx';
import About from './pages/About.jsx';

function App() {
 

  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Countries} />
        <Route path="/about" exact component={About} />
      </Switch>
    </Router>
  );
}

export default App
