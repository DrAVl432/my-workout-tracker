// src/components/EntryForm.tsx

import React, { useState } from 'react';

interface WorkoutEntry {
  date: string;
  exercise: string;
  duration: number;
  calories: number;
}

interface EntryFormProps {
  onAddEntry: (entry: WorkoutEntry) => void;
}

const EntryForm: React.FC<EntryFormProps> = ({ onAddEntry }) => {
  const [formState, setFormState] = useState<WorkoutEntry>({
    date: '',
    exercise: '',
    duration: 0,
    calories: 0,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormState({
      ...formState,
      [name]: name === 'duration' || name === 'calories' ? Number(value) : value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAddEntry(formState);
    setFormState({ date: '', exercise: '', duration: 0, calories: 0 });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="date"
        name="date"
        value={formState.date}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="exercise"
        placeholder="Exercise"
        value={formState.exercise}
        onChange={handleChange}
        required
      />
      <input
        type="number"
        name="duration"
        placeholder="Duration (mins)"
        value={formState.duration}
        onChange={handleChange}
        required
      />
      <input
        type="number"
        name="calories"
        placeholder="Calories"
        value={formState.calories}
        onChange={handleChange}
        required
      />
      <button type="submit">Add Entry</button>
    </form>
  );
};

export default EntryForm;