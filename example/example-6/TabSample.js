import { useState } from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

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

const Morning = props => {
  const { count, setCount } = props;
  return (
    <>
      <p>Good Morning! {count}</p>
      <Button variant="contained" onClick={() => setCount(count + 1)}>Click</Button>
    </>
  );
}

const Hello = props => {
  const { count, setCount } = props;
  return (
    <>
      <p>Hello! {count}</p>
      <Button variant="contained" onClick={() => setCount(count + 1)}>Click</Button>
    </>
  );
}

const Evening = props => {
  const { count, setCount } = props;
  return (
    <>
      <p>Good Evening! {count}</p>
      <Button variant="contained" onClick={() => setCount(count + 1)}>Click</Button>
    </>
  );
}

const BasicTabs = () => {
  const [morningCount, setMorningCount] = useState(0);
  const [helloCount, setHelloCount] = useState(0);
  const [eveningCount, setEveningCount] = useState(0);
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
        <Morning count={morningCount} setCount={setMorningCount}/>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Hello count={helloCount} setCount={setHelloCount}/>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Evening count={eveningCount} setCount={setEveningCount}/>
      </TabPanel>
    </Box>
  );
}

export default BasicTabs;
