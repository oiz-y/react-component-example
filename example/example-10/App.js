import './App.css';
import { useState } from 'react';
import BasicTabs from './TabSample';
import Summmary from './Summary';
import Grid from '@mui/material/Grid';

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
            setMorningCount={setMorningCount}
            helloCount={helloCount}
            setHelloCount={setHelloCount}
            eveningCount={eveningCount}
            setEveningCount={setEveningCount}
          />
        </Grid>
        <Grid item xs={6}>
          <Summmary
            morningCount={morningCount}
            helloCount={helloCount}
            eveningCount={eveningCount}
          />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
