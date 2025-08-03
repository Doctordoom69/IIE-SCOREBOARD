
import React, { useState } from 'react';
import { ScoreEntry, NewScoreEntry } from './types';
import { INITIAL_SCORES } from './constants';
import ScoreForm from './components/ScoreForm';
import Scoreboard from './components/Scoreboard';
import ScoreSummary from './components/ScoreSummary';

const App: React.FC = () => {
  const [scores, setScores] = useState<ScoreEntry[]>(INITIAL_SCORES);

  const handleAddScore = (newScore: NewScoreEntry) => {
    const entryWithId: ScoreEntry = {
      ...newScore,
      id: new Date().getTime().toString(), // Simple unique ID
    };
    setScores(prevScores => [...prevScores, entryWithId].sort((a,b) => new Date(b.date).getTime() - new Date(a.date).getTime()));
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans">
      <header className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold leading-tight text-gray-900">
            Student Scoreboard
          </h1>
        </div>
      </header>
      <main className="py-10">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-1">
              <ScoreForm onSubmit={handleAddScore} />
            </div>
            <div className="lg:col-span-2 space-y-8">
              <ScoreSummary scores={scores} />
              <Scoreboard scores={scores} />
            </div>
          </div>
        </div>
      </main>
      <footer className="text-center py-4 text-gray-500 text-sm">
        <p>Built with React & Tailwind CSS</p>
      </footer>
    </div>
  );
};

export default App;
