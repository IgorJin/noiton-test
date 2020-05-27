import React from 'react';
import logo from './logo.svg';
import './App.css';
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
    </div>
  );
}

const mapStateToProps = state => ({
  stateTable: state.tableReducer.table
})

export default connect(mapStateToProps)(App);
