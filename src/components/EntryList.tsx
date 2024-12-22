// src/components/EntryList.tsx

import React, { useState } from 'react';
import EntryForm from './EntryForm';
import EntryTable from './EntryTable';

interface WorkoutEntry {
  date: string;
  exercise: string;
  duration: number;
  calories: number;
}

const EntryList: React.FC = () => {
  const [entries, setEntries] = useState<WorkoutEntry[]>([]);

  const handleAddEntry = (entry: WorkoutEntry) => {
    setEntries([...entries, entry]);
  };

  const handleDeleteEntry = (index: number) => {
    setEntries(entries.filter((_, i) => i !== index));
  };

  return (
    <div>
      <EntryForm onAddEntry={handleAddEntry} />
      <EntryTable entries={entries} onDeleteEntry={handleDeleteEntry} />
    </div>
  );
};

export default EntryList;