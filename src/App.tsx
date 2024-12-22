// src/App.tsx

import React from 'react';
import EntryList from './components/EntryList';

const App: React.FC = () => {
  return (
    <div className="App">
      <h1>Workout Tracker</h1>
      <EntryList />
    </div>
  );
};

export default App;