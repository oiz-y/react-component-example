import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

const Summary = props => {
  const { morningCount, helloCount, eveningCount } = props;
  return (
    <>
      <Typography variant="h5">Greeting Count</Typography>
      <Grid container spacing={2}>
        <Grid item xs={4}>Morning Count</Grid>
        <Grid item xs={4}>Hello Count</Grid>
        <Grid item xs={4}>Evening Count</Grid>
        <Grid item xs={4}>{morningCount}</Grid>
        <Grid item xs={4}>{helloCount}</Grid>
        <Grid item xs={4}>{eveningCount}</Grid>
      </Grid>
    </>
  );
}

export default Summary;
