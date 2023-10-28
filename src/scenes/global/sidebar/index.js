import { Box, IconButton, Typography, useTheme } from '@mui/material';
import { Menu, MenuItem, Sidebar, SubMenu } from 'react-pro-sidebar';
import React, { useState } from 'react';

import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import BarChartIcon from '@mui/icons-material/BarChart';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import ContactPageOutlinedIcon from '@mui/icons-material/ContactPageOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import { Link } from 'react-router-dom';
import MapOutlinedIcon from '@mui/icons-material/MapOutlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import PeopleOutlineOutlinedIcon from '@mui/icons-material/PeopleOutlineOutlined';
import PeopleOutlinedIcon from '@mui/icons-material/PeopleOutlined';
import PieChartIcon from '@mui/icons-material/PieChart';
import ReceiptOutlinedIcon from '@mui/icons-material/ReceiptOutlined';
import { token } from '../../../theme';

const SideBar = () => {
  const theme = useTheme()
  const colors = token(theme.palette.mode)
  const [isCollaspe , setCollaspe] = useState(false)
  const [selected, setSelected] = useState('Dashboard')
  console.log("object")
  return (
  
    <Box>
  
    </Box>
  );
}

export default SideBar;
