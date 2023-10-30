import 'react-pro-sidebar/dist/css/styles.css';

import {BarChartOutlined, LineAxisOutlined, PieChartOutlineOutlined} from '@mui/icons-material'
import { Box, IconButton, Typography, useTheme } from '@mui/material';
import { Menu, MenuItem, ProSidebar, SubMenu } from 'react-pro-sidebar';
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

const Item = ({title,to,selected,setSelected ,icon})=>{
  const theme = useTheme()
  const colors = token(theme.palette.mode)
  return (
    <MenuItem 
    active = {selected === title}
    onClick={()=>setSelected(title)}
   icon={icon}
    style={{color:colors.grey[100]}}
    >
      <Typography>{title}</Typography>
      <Link to={to} />
    </MenuItem>
  )
  
}

const NavSideBar = () => {
  const theme = useTheme()
  const colors = token(theme.palette.mode)
  const [isCollaspe, setCollaspe] = useState(false)
  const [selected, setSelected] = useState('Dashboard')
  console.log("object")
  return (

    <Box
      sx={{
        "& .pro-sidebar-inner": {
          background: `${colors.primary[400]}`
        },
        "& .pro-inner-item": {
          padding: '5px 35px 20px 5px !important'
        },
        "& .pro-inner-item:hover": {
          color: "#868dfb !important"

        },
        "& .pro-icon-wrapper": {
          backgroundColor: "transparent !important"

        },
        "& .pro-menu-item.active": {
          color: "#6870fa !important"

        }
      }}
    >
      <ProSidebar collapsed={isCollaspe}>
        <Menu iconShape="square">
          <MenuItem
            onClick={()=> setCollaspe(!isCollaspe)}
            icon={isCollaspe ? <MenuOutlinedIcon /> : undefined}
            style={{
              margin: '10px 0px 20px 0px',
              color: colors.grey[100]
            }}
          >
            {!isCollaspe && (
              <Box
                sx={{

                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  ml: '15px'
                }}
              >
                <Typography variant='h3' color={colors.grey[100]}>
                  Admin
                </Typography>

                <IconButton onClick={()=> setCollaspe(!isCollaspe)}>
                  <MenuOutlinedIcon />
                </IconButton>
              </Box>
            )

            }

          </MenuItem>
         { !isCollaspe && (
          <Box mb='25px'>
            <Box display='flex' justifyContent='center' alignItems='center'>
              <img src ="https://instagram.fdel1-5.fna.fbcdn.net/v/t39.30808-6/362258236_18268657171153092_6535042424640620298_n.jpg?stp=dst-jpg_e15&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE0NDAuc2RyIn0&_nc_ht=instagram.fdel1-5.fna.fbcdn.net&_nc_cat=100&_nc_ohc=5j-mXaPVxpsAX_jIuv5&edm=ACWDqb8AAAAA&ccb=7-5&ig_cache_key=MzE1MjMzMDYzMTM2NzM3NzYyMQ%3D%3D.2-ccb7-5&oh=00_AfCabQ3WUTrjAXNAihrph8MfQ-qixCJ8hXNWY2_w7zA3qg&oe=6542E1B4&_nc_sid=ee9879" alt=''
              width='100px'
              height='100px'
              style={{cursor: 'pointer',borderRadius: "50%"}}
               />
            </Box>
            <Box textAlign='center'>
              <Typography  variant='h3'
              fontWeight='bold'
              sx={{
                margin: '20px 0px 0px 0px',
                color:colors.grey[100]
              }}>
                Santohack
              </Typography>
              <Typography variant='h5' color={colors.greenAccent[500]}>
                Developer
              </Typography>
            </Box>
          </Box>
         )}
         <Box paddingLeft={isCollaspe ? undefined : '10%'}>
          <Item
          title='Dashboard'
          icon={<HomeOutlinedIcon />} 
          selected={selected}
          setSelected={setSelected}
          to='/'
          />
          <Typography variant='h6' color={colors.grey[300]} margin='15px 0px 5px 20px'>
            Data
          </Typography>
           <Item
          title='Manage Team'
          icon={<PeopleOutlinedIcon />} 
          selected={selected}
          setSelected={setSelected}
          to='/team'
          />
           <Item
          title='Contact information'
          icon={<ContactPageOutlinedIcon />} 
          selected={selected}
          setSelected={setSelected}
          to='/contact'
          />
           <Item
          title='Invoices Balances'
          icon={<ReceiptOutlinedIcon />} 
          selected={selected}
          setSelected={setSelected}
          to='/invoices'
          />
           <Typography variant='h6' color={colors.grey[300]} margin='15px 0px 5px 20px'>
            Pages
          </Typography>
          <Item
          title='Profile Form'
          icon={<PeopleOutlineOutlinedIcon />} 
          selected={selected}
          setSelected={setSelected}
          to='/profile'
          />
          <Item
          title='Calendar Page'
          icon={<CalendarMonthOutlinedIcon />} 
          selected={selected}
          setSelected={setSelected}
          to='/calendar'
          />
          <Item
          title='FAQ Page'
          icon={<HelpOutlineOutlinedIcon />} 
          selected={selected}
          setSelected={setSelected}
          to='/faq'
          />
           <Typography variant='h6' color={colors.grey[300]} margin='15px 0px 5px 20px'>
            Chart
          </Typography>
          <Item
          title='Bar Chart'
          icon={<BarChartOutlined />} 
          selected={selected}
          setSelected={setSelected}
          to='/bar'
          />
          <Item
          title=' Pie Chart'
          icon={<PieChartOutlineOutlined />} 
          selected={selected}
          setSelected={setSelected}
          to='/pie'
          />
          <Item
          title='Line Chart'
          icon={<LineAxisOutlined />} 
          selected={selected}
          setSelected={setSelected}
          to='/line'
          />
          <Item
          title='Geography Chart'
          icon={<MapOutlinedIcon />} 
          selected={selected}
          setSelected={setSelected}
          to='/geography'
          />
         </Box>
        </Menu>
      </ProSidebar>
    </Box>
  );
}

export default NavSideBar;
