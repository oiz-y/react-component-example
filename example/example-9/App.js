import './App.css';
import { useState } from 'react';
import BasicTabs from './TabSample';
import Grid from '@mui/material/Grid';

const App = () => {
  // ここでカウント用の state を定義
  const [morningCount, setMorningCount] = useState(0);
  const [helloCount, setHelloCount] = useState(0);
  const [eveningCount, setEveningCount] = useState(0);

  return (
    <div className="App">
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <BasicTabs
            morningCount={morningCount}
            setMorningCount={setMorningCount}
            helloCount={helloCount}
            setHelloCount={setHelloCount}
            eveningCount={eveningCount}
            setEveningCount={setEveningCount}
          />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
