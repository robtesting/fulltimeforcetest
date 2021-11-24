import React, { useEffect, useState } from 'react';
import { getCommits } from './api/GetCommits';
import './App.css';
import CommitsTable from './components/CommitsTable';
import Header from './components/Header';

function App() {

  const [commits, setCommits] = useState<any[]>([]);

  useEffect(() => {
    async function loadCommits() {
      const latestCommits = await getCommits();
      setCommits(latestCommits);
    }
    loadCommits();
  }, []);

  return (
    <div>
      <Header />
      <CommitsTable commits={commits} />
    </div>
  );
}

export default App;
