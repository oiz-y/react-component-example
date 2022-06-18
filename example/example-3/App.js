import './App.css';
import { useState } from 'react';
import BasicTabs from './TabSample';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';

const Morning = () => {
  // カウントアップ用の state を定義
  const [count, setCount] = useState(0);
  return (
    <>
      <p>Good Morning! {count}</p>
      {/* ボタンをクリックすると、count を count + 1 で更新する */}
      <Button variant="contained" onClick={() => setCount(count + 1)}>Click</Button>
    </>
  );
}

const Hello = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <p>Hello! {count}</p>
      <Button variant="contained" onClick={() => setCount(count + 1)}>Click</Button>
    </>
  );
}

const Evening = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <p>Good Evening! {count}</p>
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
