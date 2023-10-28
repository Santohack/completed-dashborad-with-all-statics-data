import { Box, IconButton, InputBase, useTheme } from '@mui/material';
import React, { useContext } from 'react';
import { colorModeContext, token } from '../../../theme';

import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';

const TopBar = () => {
  const theme = useTheme();
  const colors = token(theme.palette.mode)
  const colorMode = useContext(colorModeContext)
  return (
    <Box display='flex' justifyContent='space-between' p={2}>
      <Box display='flex' backgroundColor={colors.primary[400]} borderRadius="7px">
        <InputBase sx={{ ml: 2, }} placeholder='Search...' />
        <IconButton type='button' sx={{ p: 1 }} >
          <SearchOutlinedIcon />
        </IconButton>

      </Box>
      <Box display='flex'>
        <IconButton onClick={colorMode.toggleColorMode}>
          {theme.palette.mode === 'dark'
            ? (<DarkModeOutlinedIcon />) : (<LightModeOutlinedIcon />)
          }

        </IconButton>
        <IconButton>
          <NotificationsNoneOutlinedIcon />
        </IconButton>
        <IconButton>
          <PersonOutlineOutlinedIcon />
        </IconButton>
        <IconButton>
          <SettingsOutlinedIcon />
        </IconButton>

      </Box>

    </Box>
  );
}

export default TopBar;
