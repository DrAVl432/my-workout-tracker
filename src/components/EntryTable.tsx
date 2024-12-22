import React from 'react';

interface DistanceEntry {
  date: string;
  distance: number;
}

interface EntryTableProps {
  entries: DistanceEntry[];
  onDeleteEntry: (index: number) => void;
  onEditInitiation: (index: number) => void;
}

const EntryTable: React.FC<EntryTableProps> = ({ entries, onDeleteEntry, onEditInitiation }) => {
  return (
    <div>
      {entries.map((entry, index) => (
        <div key={index} className="entry">
          <span className="date">{entry.date}</span>
          <span className="kilometers">{entry.distance.toFixed(2)} km</span>
          <button className="edit-entry-button" onClick={() => onEditInitiation(index)}title="Edit"
              >
                ✎ </button>
          <button className="delete-entry-button" onClick={() => onDeleteEntry(index)}title="Delete"
              >
                ✘ </button>
        </div>
      ))}
    </div>
  );
};

export default EntryTable;