import * as React from 'react';
import {useState} from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Divider from '@mui/material/Divider';


function Leftbar() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: 200, bgcolor: '#DCDCDC', display: "inline-block", float: "left"}}>
      <Tabs value={value} onChange={handleChange}  orientation="vertical">
        <Tab label="Item One" />
        <Tab label="Item Two" />
        
        <Tab label="Item Three" />
        <Divider orientation="horizantal" flexItem />
        <Tab label="Item One" />
        <Tab label="Item Two" />
        
        <Tab label="Item Three" />
        <Divider orientation="horizantal" flexItem />
        <Tab label="Item One" />
        <Tab label="Item Two" />
        
        <Tab label="Item Three" />
        <Divider orientation="horizantal" flexItem />
       
      </Tabs>
     

    </Box>
  );
}

export default Leftbar;