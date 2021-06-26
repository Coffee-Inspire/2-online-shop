import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './style/oneStyle.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'


import Navigation from './components/templates/Navigation';
import HomePage from './pages/HomePage';
import AboutUsPage from './pages/AboutUsPage';
import Footer from './components/templates/Footer';

function App() {
  return (
    <Router>
      <Navigation />
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="/about">
          <AboutUsPage/>
        </Route>
      </Switch>
      <Footer/>
    </Router>
  );
}

export default App;
