import React from 'react';
import './App.css';
import CasesList from './components/CasesList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
          COVID 19 Tracker
      </header>
      <div>Here is the div to return to data</div>
      <CasesList />
    </div>
  );
}

export default App;
