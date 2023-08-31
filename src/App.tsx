import React from 'react';
import './App.css';
//import Header from './components/Header';
import Sheet from './components/SheetView/Sheet';

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
      <Sheet/>
    </div>
  );
}

export default App;
