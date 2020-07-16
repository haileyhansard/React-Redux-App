import React from 'react';
import './App.css';
import CasesList from './components/CasesList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
          Quote Generator
      </header>
      <div style={{height: '40px', color: '#c052d1', margin: '2%', fontSize: '20px'}}> Here are your Quotes for the Day!</div>
      <CasesList />
    </div>
  );
}

export default App;
