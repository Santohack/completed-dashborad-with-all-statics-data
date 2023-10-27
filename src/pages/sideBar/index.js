import { Avatar, Divider, IconButton, ListItem, ListItemAvatar, ListItemButton, ListItemText, Typography } from '@mui/material';
import { MyList, NavContainer } from '../../styles/sideBar.js';

import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import GridViewIcon from '@mui/icons-material/GridView';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { NavText } from '../../helper';
import React from 'react'
import User from '../../components/user/index.js';

const LeftNav = () => {
    const containerStyles = {
        backgroundColor: "##EDF9E6",
        borderRadius: '10px',
        margin: '10px',
        width: "auto",
        padding: "'inherit'",
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
    };

    const postionBottom = {
        display: 'flex',

        position: 'absolute',

        bottom: 0,

    }
    const WdIcon = () => <span style={{ width: '44px', height: '23px', borderRadius: '5px', display: 'flex', justifyContent: 'center', alignItems: 'center', border: '1px solid #E6EAEC' }}>WD</span>;

    return (
        <>
            <NavContainer>
                <MyList>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <ListItem>
                            <ListItemButton>

                                <WdIcon />

                                <div style={{ display: 'flex', flexDirection: 'column', marginLeft: 16 }}>
                                    <Typography variant="caption" color="textSecondary">
                                        ENTERPRISE PLAN
                                    </Typography>
                                    <div style={{ display: 'flex', alignItems: 'center', }}>
                                        <Typography variant='subtitle1' sx={{ fontWeight: '4px',marginRight:'70px'}}>
                                            Academy 
                                        </Typography>
                                        <Divider orientation="vertical" flexItem style={{ marginLeft: 8, marginRight: 8 }} />
                                        <IconButton size="small" color="primary">
                                            <ArrowBackIcon />
                                        </IconButton>
                                    </div>
                                </div>
                            </ListItemButton>
                        </ListItem>
                       

                    </div>

                    <User text={"Dashboard"} icon={<GridViewIcon />} bgColor={"#EDF9E6"} iconColor={"#25824F"} textColor={"#25824F"} />
                    {NavText.map((item, index) => (
                        <User key={index} text={item.name} icon={item.icon} rightIcon={<ChevronRightIcon />} />
                    ))}
                    <div style={postionBottom}>
                        <ListItem button style={containerStyles}>
                            <ListItemAvatar>
                                <Avatar alt="Profile Picture" src='https://img.freepik.com/premium-photo/young-woman_948023-1111.jpg' />
                            </ListItemAvatar>
                            <ListItemText sx={{ margin: '0px 11px' }}
                                primary='Jane'
                                secondary="Developer"
                                primaryTypographyProps={{ sx: { color: '##A0AFB7' } }}
                                secondaryTypographyProps={{ sx: { color: '##314E5E' } }}
                            />
                            <ListItemButton>
                                <IconButton sx={{ marginLeft: 'auto' }}>
                                    <KeyboardArrowDownIcon />
                                </IconButton>

                            </ListItemButton>

                        </ListItem>
                    </div>


                </MyList>
            </NavContainer>
        </>
    )
}

export default LeftNav