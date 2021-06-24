import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './style/oneStyle.css';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'


import Navigation from './components/templates/Navigation';
import HomePage from './pages/HomePage';
import Footer from './components/templates/Footer';

function App() {
  return (
    <Router>
      <Navigation />
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
      </Switch>
      <Footer/>
    </Router>
  );
}

export default App;
