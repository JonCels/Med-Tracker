import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header name='Jerry' />
      <Header name='Sam' />
      <Header name='Jung' />
    </div>
  );
}

export default App;
