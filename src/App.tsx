import React from 'react';
import './App.css';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
//import Header from './components/Header';
import Sheet from './components/SheetView/Sheet';
import ViewBar from './components/ViewBar';
import Container from './components/SearchView/Container';
import Tracker from './components/Tracker';


function App() {
  return (
    <div className="App">
      <Tracker/>
    </div>
  );
}

export default App;