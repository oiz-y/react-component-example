import './App.css';
import BasicTabs from './TabSample';
import Grid from '@mui/material/Grid';

const morning =  <p>Good Morning!</p>;
const hello =  <p>Hello!</p>;
const evening =  <p>Good Evening!</p>;

const App = () => {
  return (
    <div className="App">
      <Grid container>
        <Grid item xs={6}>
          {/* 定数 `morning`、`hello`、`evening` を `BasicTabs` コンポーネントに渡す */}
          <BasicTabs morning={morning} hello={hello} evening={evening} />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
