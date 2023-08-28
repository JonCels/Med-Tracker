import React from 'react';
import logo from './logo.svg';
import './App.css';
//import Header from './components/Header';
import {CommentField, BinaryField, DateField} from './components/ImportHelper';

function App() {
  return (
    <div className="App">
      <CommentField title="Comments" limit={500}/>
      <BinaryField title="Bowel Movement" name="bowel-movement"/>
      <DateField title="Hello"/>
    </div>
  );
}

export default App;
