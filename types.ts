
export interface ScoreEntry {
  id: string;
  studentName: string;
  date: string; // Storing date as string in YYYY-MM-DD format
  taskName: string;
  score: number;
}

export type NewScoreEntry = Omit<ScoreEntry, 'id'>;
