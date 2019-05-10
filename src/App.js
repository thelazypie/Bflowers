import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import Main from './Components/Main/Main'
import Register from './Components/Register/Register'
import Accessories from './Components/Accessories/Accessories'
import About from './Components/About/About'
import Delivery from './Components/Delivery/Delivery'
import LogIn from './Components/LogIn/LogIn'
import Me from './Components/me/Me'

import { BrowserRouter, Route } from 'react-router-dom';


class App extends Component {
  render() {
    return (
        <BrowserRouter>
          <div className="App">
              <Header/>
              {/* <Main/> */}
              <Route exact path='/' component={Main}/>
              <Route exact path='/register' component={Register}/>
              <Route exact path='/delivery' component={Delivery}/>
              <Route exact path='/accessories' component={Accessories}/>
              <Route exact path='/logIn' component={LogIn}/>
              <Route exact path='/about' component={About}/>
              <Route exact path='/me' component={Me}/>
              {/* <Route exact component={Main}/> */}
              {/* <Delivery/> */}
            <Footer/>
          </div>
        </BrowserRouter>
    );
  }
}

export default App;
