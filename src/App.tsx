import React from 'react';
import logo from './logo.svg';
import './App.css';
//import Header from './components/Header';
import {CommentField, BinaryField} from './components/ImportHelper';

function App() {
  return (
    <div className="App">
      <CommentField title="Comments" limit={500}/>
    </div>
  );
}

export default App;
