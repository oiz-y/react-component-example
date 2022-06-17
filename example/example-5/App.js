import './App.css';
import BasicTabs from './TabSample';
import Grid from '@mui/material/Grid';

const App = () => {
  return (
    <div className="App">
      <Grid container>
        <Grid item xs={6}>
          <BasicTabs />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
