import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './style/oneStyle.css';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'


import Navigation from './components/templates/Navigation';
import HomePage from './pages/HomePage';

function App() {
  return (
    <Router>
      <Navigation />
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
