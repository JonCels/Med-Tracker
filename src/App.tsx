import React from 'react';
import './App.css';
//import Header from './components/Header';
import Sheet from './components/SheetView/Sheet';
import ViewBar from './components/ViewBar';
import Container from './components/SearchView/Container';

function App() {
  const dropdownOptions = [
    { text: "Spasms", value: "Spasms" },
    { text: "Pressure Ulcer", value: "Pressure-Ulcer" },
    { text: "Nausea", value: "Nausea" },
    { text: "Gas", value: "Gas" },
    { text: "Other", value: "Other" },
  ];

  return (
    <div className="App">
      <ViewBar/>
      <Sheet/>
      <Container/>
    </div>
  );
}

export default App;