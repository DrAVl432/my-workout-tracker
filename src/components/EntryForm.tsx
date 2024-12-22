import React, { useState, useEffect } from 'react';

interface DistanceEntry {
  date: string;
  distance: number;
}

interface EntryFormProps {
  onAddEntry: (entry: DistanceEntry) => void;
  onEditEntry: (entry: DistanceEntry) => void;
  editEntry: DistanceEntry | null;
}

const EntryForm: React.FC<EntryFormProps> = ({ onAddEntry, onEditEntry, editEntry }) => {
  const [date, setDate] = useState<string>('');
  const [distance, setDistance] = useState<number>(0);

  useEffect(() => {
    if (editEntry) {
      setDate(editEntry.date);
      setDistance(editEntry.distance);
    }
  }, [editEntry]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (editEntry) {
      onEditEntry({ date, distance });
    } else {
      onAddEntry({ date, distance });
    }

    setDate('');
    setDistance(0);
  };

  return (
    <form className="add-entry-form" onSubmit={handleSubmit}>
<div className='input-data'>
        <label htmlFor="date">Дата</label>
      <input
        type="date"
        className="input"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        required
      />
</div>
<div className='input-distance'>
      <label htmlFor="distance">Пройдено км</label>
      <input
        type="number"
        className="input"
        value={distance}
        onChange={(e) => setDistance(Number(e.target.value))}
        placeholder="Distance (km)"
        required
      />
      </div>
      <button type="submit" className="button">
        {editEntry ? 'Ок' : 'Ок'}
      </button>
    </form>
  );
};

export default EntryForm;