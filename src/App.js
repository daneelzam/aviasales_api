import React from 'react';
import {
  BrowserRouter as Router, Redirect, Route, Switch
} from 'react-router-dom';
import { useSelector } from 'react-redux';

import NavBar from './components/NavBar/NavBar';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Dashboard from './components/Dashboard/Dashboard';
import Login from './components/Login/Login';
import Logout from './components/Logout/Logout';

function App() {
  const isAuth = useSelector((state) => state.auth.isAuth);
  return (
    <>
    <Router>
      <NavBar/>
      <Switch>
        <Route exact path='/'> {isAuth ? <Redirect to='/dashboard'/> : <Redirect to='/login'/>} </Route>
        <Route path='/login'><Login /></Route>
        <Route path='/logout'><Logout /></Route>
        <PrivateRoute path='/dashboard'><Dashboard /></PrivateRoute>
      </Switch>
    </Router>
    </>
  );
}

export default App;
