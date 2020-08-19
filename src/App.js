import React from 'react';
import './App.css';
import Main from './components/Main';
import DesktopNavBar from './components/Navbars/DesktopNavBar';
import MobileNavBar from './components/Navbars/MobileNavBar'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import sections from './assets/sections';
import mobileCheck from './utils/mobileCheck';

function App() {
  return (
    <Router>
      { !mobileCheck()
          ? (
          <DesktopNavBar 
            sections={sections}
            active={'home'}
          /> )
          : (
            <MobileNavBar
            />
          )
      }
      <Switch>
        <Redirect from='/' to='/home' />
        <Route path='/home' component={Main} />
      </Switch>
    </Router>
  );
}

export default App;
