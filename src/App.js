import React from 'react';
import './App.css';
import Main from './components/Main';
import DesktopNavBar from './components/Navbars/DesktopNavBar';
import MobileNavBar from './components/Navbars/MobileNavBar'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import sections from './assets/sections';
import mobileCheck from './utils/mobileCheck';
import { ThemeProvider } from 'react-jss';
import { ParallaxProvider } from 'react-scroll-parallax';

const theme = {
  
}

function App() {
  const [navbarTransparent, setNavbarTransparent] = React.useState(true);

  return (
    <div className='root'>
      <ThemeProvider theme={theme}>
        <ParallaxProvider>
          <Router>
            { !mobileCheck()
                ? (
                <DesktopNavBar 
                  sections={sections}
                  active={'home'}
                  title='Youwen Wu'
                  navTransparent={navbarTransparent}
                /> )
                : (
                  <MobileNavBar
                    title='Youwen Wu'
                    sections={sections}
                    navTransparent={navbarTransparent}
                  />
                )
            }
            <Switch>
              <Redirect from='/' to='/home' exact />
              <Route path='/home' render={() => (
                <Main
                  onNavTop={setNavbarTransparent}
                  title='Youwen Wu'
                />
              )}
              />
            </Switch>
          </Router>
        </ParallaxProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;
