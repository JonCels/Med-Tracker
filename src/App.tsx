import React from 'react';
import logo from './logo.svg';
import './App.css';
//import Header from './components/Header';
import {CommentField, BinaryField, DateField, DropdownField} from './components/ImportHelper';

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
      <BinaryField title="Bowel Movement" name="bowel-movement"/>
      <DateField title="Hello"/>
      <DropdownField title="hello" options={dropdownOptions}/>
      <h1>{dropdownOptions[0].value}</h1>
    </div>
  );
}

export default App;
