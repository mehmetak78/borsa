import React, {Fragment} from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Navbar from "./components/Navbar";
import MainPage from "./pages/MainPage";
import StatusBar from "./components/StatusBar";
import AuthState from "./context/auth/AuthState";
import AlertState from "./context/alert/AlertState";
import AppInit from "./AppInit";
import Alerts from "./components/Alerts";
import PrivateRoute from "./routing/PrivateRoute";
import About from "./pages/About";
import Register from "./pages/Register";
import Login from "./pages/Login";

function App() {
  return (
    <AlertState>
      <AuthState>
        <Router>
          <Fragment>
            <AppInit/>
              <Navbar/>
              <div className={"mainPage"}>
                  <Switch>
                    <Route exact path='/about' component={About} />
                    <Route exact path='/register' component={Register} />
                    <Route exact path='/login' component={Login} />
                    <PrivateRoute exact path='/home' component={MainPage} />
                  </Switch>
                  <Alerts/>
              </div>
            <StatusBar/>
          </Fragment>
        </Router>
      </AuthState>
    </AlertState>
  );
}

export default App;
