import { useState } from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const BasicTabs = props => {
  const { morning, hello, evening } = props;
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" centered>
          <Tab label="Item One" {...a11yProps(0)} />
          <Tab label="Item Two" {...a11yProps(1)} />
          <Tab label="Item Three" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        {morning}
      </TabPanel>
      <TabPanel value={value} index={1}>
        {hello}
      </TabPanel>
      <TabPanel value={value} index={2}>
        {evening}
      </TabPanel>
    </Box>
  );
}

export default BasicTabs;

import './App.css';
import BasicTabs from './TabSample';
import Grid from '@mui/material/Grid';

const morning =  <p>Good Morning!</p>;
const hello =  <p>Hello!</p>;
const evening =  <p>Good Evening!</p>;


const App = () => {
  return (
    <div className="App">
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <BasicTabs morning={morning} hello={hello} evening={evening} />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
