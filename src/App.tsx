import React from 'react';
import './App.css';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
//import Header from './components/Header';
import Sheet from './components/SheetView/Sheet';
import ViewBar from './components/ViewBar';
import Container from './components/SearchView/Container';

function App() {
  return (
    <div className="App">
      <Tabs>
        <TabList>
          <Tab>Sheet Page</Tab>
          <Tab>Search Page</Tab>
        </TabList>

        <TabPanel>
          <Sheet/>
        </TabPanel>
        <TabPanel>
          <Container/>
        </TabPanel>
      </Tabs>
    </div>
  );
}

export default App;