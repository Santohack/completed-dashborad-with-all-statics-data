import { Divider, Grid } from '@mui/material';

import React from 'react';
import ScreenCard from '../screenCard';
import SideBar from '../sideBar';

const HomeScreen = () => {
  return (
    <>
     <Grid container>
        <Grid item md={2} style={{ borderRight: '1px solid #E2E7E9' }}>
            <SideBar />
           
        </Grid>
        
        <Grid item md={10}>
            <ScreenCard />
            </Grid>
     </Grid>
    </>
  );
}

export default HomeScreen;
