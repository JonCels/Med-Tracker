import React from 'react';
import './App.css';
//import Header from './components/Header';
import Sheet from './components/SheetView/Sheet';
import ViewBar from './components/ViewBar';
import Container from './components/SearchView/Container';

function App() {
  return (
    <div className="App">
      <ViewBar/>
      <Sheet/>
      <Container/>
    </div>
  );
}

export default App;