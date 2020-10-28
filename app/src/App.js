import React from 'react';
import './App.css';
import QuotesList from './components/QuotesList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
          Quote Generator
      </header>
      <div style={{height: '40px', color: '#c052d1', margin: '2%', fontSize: '20px'}}> Here are your Quotes for the Day!</div>
      <div className="list">
        <QuotesList />
      </div>
    </div>
  );
}

export default App;
