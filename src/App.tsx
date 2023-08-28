import React from 'react';
import logo from './logo.svg';
import './App.css';
//import Header from './components/Header';
import {CommentField, BinaryField, DateField, DropdownField, IntField, DecimalField} from './components/ImportHelper';

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
      <CommentField title="Comments" limit={500}/>
      <BinaryField title="Binary" name="bowel-movement"/>
      <DateField title="Date"/>
      <DropdownField title="Dropdown" options={dropdownOptions}/>
      <IntField title="Number (Int)"/>
      <DecimalField title="Number (Decimal)"/>
    </div>
  );
}

export default App;
