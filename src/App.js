import React from 'react';
import logo from './logo.svg';
import './App.css';
<<<<<<< HEAD
import FileUpload from './components/FileUpload'
import MessageInfo from './components/MessageInfo'
import { connect } from 'react-redux'

function App({stateTable}) {
  const isSend = Object.keys(stateTable).length !== 0;
  return (
    <div className="App">
      <div className='container'>
        <header className="">
          <img src={logo} className="" alt="logo" />
        </header>
        <FileUpload />
        <MessageInfo data={stateTable} isSend={isSend} />
      </div>
=======
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
>>>>>>> f3a1e5569b90113d508c1c272f914ac369fbc887
    </div>
  );
}

<<<<<<< HEAD
const mapStateToProps = state => ({
  stateTable: state.tableReducer.table
})

export default connect(mapStateToProps)(App);
=======
export default App;
>>>>>>> f3a1e5569b90113d508c1c272f914ac369fbc887
