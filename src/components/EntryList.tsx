import React, { useState } from 'react';
import EntryForm from './EntryForm';
import EntryTable from './EntryTable';

interface DistanceEntry {
  date: string;
  distance: number;
}

const EntryList: React.FC = () => {
  const [entries, setEntries] = useState<DistanceEntry[]>([]);
  const [editIndex, setEditIndex] = useState<number | null>(null);

  const handleAddEntry = (entry: DistanceEntry) => {
    const newEntries = [...entries];
    const existingIndex = newEntries.findIndex((e) => e.date === entry.date);

    if (existingIndex !== -1) {
      // Если дата уже существует, суммируем расстояния
      newEntries[existingIndex].distance += entry.distance;
    } else {
      // Добавляем запись и сортируем по дате в порядке убывания
      newEntries.push(entry);
      newEntries.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    }

    setEntries(newEntries);
  };

  const handleDeleteEntry = (index: number) => {
    const newEntries = [...entries];
    newEntries.splice(index, 1);
    setEntries(newEntries);
    setEditIndex(null);
  };

  const handleEditEntry = (entry: DistanceEntry) => {
    if (editIndex !== null) {
      const newEntries = [...entries];
      newEntries[editIndex] = entry;
      setEntries(newEntries);
      setEditIndex(null);
    }
  };

  const handleEditInitiation = (index: number) => {
    setEditIndex(index);
  };

  return (
    <div className="container">
      <h1>Distance Tracker</h1>
      <EntryForm
        onAddEntry={handleAddEntry}
        onEditEntry={handleEditEntry}
        editEntry={editIndex !== null ? entries[editIndex] : null}
      />
      <EntryTable
        entries={entries}
        onDeleteEntry={handleDeleteEntry}
        onEditInitiation={handleEditInitiation}
      />
    </div>
  );
};

export default EntryList;