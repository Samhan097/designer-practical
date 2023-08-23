import * as React from 'react';
import { Box } from '@mui/material';
import Tab from '@mui/material/Tab';
import { CalendarMonthOutlined } from '@mui/icons-material';

export default function IconLabelTabs() {
  return (
      <Box sx={{display:'flex' ,flexDirection:'row', color:'black',height:10}} >
        <Tab sx={{display:'flex' ,flexDirection:'row', color:'black',pb:2}} icon={<CalendarMonthOutlined sx={{color:'black',pr:2}} />} label="23 FEb 2023" />
      <Tab sx={{display:'flex' ,flexDirection:'row',pt:3,color:'black'}}  label="26 Feb 2023" />
      </Box>

  );
}
