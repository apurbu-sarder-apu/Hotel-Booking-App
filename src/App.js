import React from 'react';
import './App.css';
import Home from './pages/Home';
import Rooms from './pages/Rooms';
import Contact from '../src/components/Contact';
import About from './components/About.js';
import SingleRoom from './pages/SingleRoom';
import Error from './pages/Error';
import Navbar from "./components/Navbar";
import ZabeerHome from './pages/ZabeerHome';
import Login from '../src/components/Login';
import Signup from '../src/components/Signup';
import Dashboard from '../src/components/Dashboard';
import { AuthProvider } from "./contexts/AuthContext";
import { Switch, Route, Redirect } from "react-router-dom";
import PrivateRoute from '../src/components/PrivateRoute';
import ForgotPassword from "../src/components/ForgotPassword";


function App() {
  return (
    <>

      <div>
        <Navbar />
        <AuthProvider>
          <Switch>
            <PrivateRoute exact path="/dashboard" component={Dashboard} />
            <PrivateRoute exact path="/" component={Home} />
            <Route exact path="/accomodation/" component={ZabeerHome} />
            <PrivateRoute exact path="/rooms/" component={Rooms} />
            <Route exact path="/rooms/:slug" component={SingleRoom} />
            <Route path="/contact" exact component={Contact} />
            <Route path="/about" exact component={About} />
            <Route path="/signup" component={Signup} />
            <Route path="/login" component={Login} />
            <Route path="/forgot-password" component={ForgotPassword} />
            <Redirect from="/" to="/dashboard" />
            <Route component={Error} />
          </Switch>
        </AuthProvider>

      </div>


    </>
  );
}

export default App;
