import React from 'react';
import './App.css';
import Preview from './components/Preview/Preview.js'
import TemplatesBar from './components/TemplatesBar/TemplatesBar';

function App() {
  return (
    <div className="App">
      <div className = 'mainModule'>
        <TemplatesBar />
      </div>

      <Preview />
    </div>
  );
}

export default App;
