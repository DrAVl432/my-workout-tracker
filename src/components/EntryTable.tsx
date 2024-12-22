// src/components/EntryTable.tsx

import React from 'react';

interface WorkoutEntry {
  date: string;
  exercise: string;
  duration: number;
  calories: number;
}

interface EntryTableProps {
  entries: WorkoutEntry[];
  onDeleteEntry: (index: number) => void;
}

const EntryTable: React.FC<EntryTableProps> = ({ entries, onDeleteEntry }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Date</th>
          <th>Exercise</th>
          <th>Duration (mins)</th>
          <th>Calories</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {entries.map((entry, index) => (
          <tr key={index}>
            <td>{entry.date}</td>
            <td>{entry.exercise}</td>
            <td>{entry.duration}</td>
            <td>{entry.calories}</td>
            <td>
              <button onClick={() => onDeleteEntry(index)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default EntryTable;