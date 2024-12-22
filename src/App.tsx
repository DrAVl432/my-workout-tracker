// src/App.tsx

import React from 'react';
import EntryList from './components/EntryList';
import './styles.css';

const App: React.FC = () => {
  return (
    <div className="App">
        <EntryList />
    </div>
  );
};

export default App;