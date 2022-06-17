import './App.css';
import BasicTabs from './TabSample';
import Grid from '@mui/material/Grid';

const Morning = () => <p>Good Morning!</p>;
const Hello = () => <p>Hello!</p>;
const Evening = () => <p>Good Evening!</p>;

const App = () => {
  return (
    <div className="App">
      <Grid container>
        <Grid item xs={6}>
          <BasicTabs Morning={Morning} Hello={Hello} Evening={Evening} />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
