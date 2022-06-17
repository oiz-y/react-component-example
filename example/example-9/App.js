import './App.css';
import { useState } from 'react';
import BasicTabs from './TabSample';
import Grid from '@mui/material/Grid';

const App = () => {
  const [morningCount, setMorningCount] = useState(0);
  const [helloCount, setHelloCount] = useState(0);
  const [eveningCount, setEveningCount] = useState(0);

  return (
    <div className="App">
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <BasicTabs
            morningCount={morningCount}
            setMorningCount={(count) => setMorningCount(count + 1)}
            helloCount={helloCount}
            setHelloCount={(count) => setHelloCount(count + 1)}
            eveningCount={eveningCount}
            setEveningCount={(count) => setEveningCount(count + 1)}
            />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
