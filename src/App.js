import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import Main from './Components/Main/Main'


class App extends Component {
  render() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <Footer/>
        </div>
    );
  }
}

export default App;
