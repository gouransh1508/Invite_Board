import './App.css';
import Navbar from './components/navbar'
import Dashboard from './components/dashboard'
import Invite from './components/invite';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


function App() {
  return (
    <Router>
    <div className="App">
    <Navbar/>
      <Switch>
        <Route exact path='/'>
          <Dashboard />
        </Route>
        <Route exact path='/invite'>
          <Invite />
        </Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
