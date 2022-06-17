import './App.css';
import { useState } from 'react';
import BasicTabs from './TabSample';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';

const Morning = <Greeting greeting={"Good Morning!"}/>;
const Hello = <Greeting greeting={"Hello!"}/>;
const Evening = <Greeting greeting={"Good Evening!"}/>;

const Greeting = props => {
  const { greeting } = props;
  const [count, setCount] = useState(0);
  return (
    <>
      <p>{greeting} {count}</p>
      <Button variant="contained" onClick={() => setCount(count + 1)}>Click</Button>
    </>
  );
}

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
