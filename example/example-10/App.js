import './App.css';
import { useState } from 'react';
import BasicTabs from './TabSample';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

const App = () => {
  const [morningCount, setMorningCount] = useState(0);
  const [helloCount, setHelloCount] = useState(0);
  const [eveningCount, setEveningCount] = useState(0);

  return (
    <div className="App">
      <Grid container >
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
        <Grid item xs={6}>
          <Typography variant="h5">Greeting count</Typography>
            <Grid container spacing={2}>
              <Grid item xs={4}>Morning Count</Grid>
              <Grid item xs={4}>Hello Count</Grid>
              <Grid item xs={4}>Evening Count</Grid>
              <Grid item xs={4}>{morningCount}</Grid>
              <Grid item xs={4}>{helloCount}</Grid>
              <Grid item xs={4}>{eveningCount}</Grid>
            </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
