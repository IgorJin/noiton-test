import React from 'react';
import logo from './logo.svg';
import './App.css';
import Main from './components/Main'
import MessageInfo from './components/MessageInfo'
import Api from './actions/table.js'

function App() {
  Api() 


  return (
    <div className="App">
      <div className='container'>
      <header className="">
        <img src={logo} className="" alt="logo" />
      </header>
    <Main />
    <MessageInfo />
    </div>
    </div>
  );
}

export default App;
