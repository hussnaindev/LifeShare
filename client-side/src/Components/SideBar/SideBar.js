import {AccountCircle, GpsFixed, HowToReg, LocalHospital, MenuOpen, Settings} from '@material-ui/icons';
import {ContactMail, Info, Policy} from '@mui/icons-material';
import Logout from '@mui/icons-material/Logout';
import PersonSearch from '@mui/icons-material/PersonSearch';
import {Box, Divider, Drawer, IconButton, List, ListItem, ListItemIcon, ListItemText} from '@mui/material';
import React, {useState} from 'react';
import {auth} from '../../Firebase';
import "./SideBar.css";

function SideBar({profile}) {
    const [sideBarState, setSideBarState] = useState(false);

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setSideBarState(open);
    };
    
    const list = (anchor) => (
        <Box sx={{ width: 300 }} role="presentation" onClick={toggleDrawer(anchor, false)} onKeyDown={toggleDrawer(anchor, false)}>
            {
                (profile) ? (
                    <List>
                        <ListItem button onClick={() => window.open("/", "__self")}>
                            <ListItemIcon>
                                <AccountCircle />
                            </ListItemIcon>
                            <ListItemText primary={profile} />
                        </ListItem>
                        <ListItem button onClick={() => window.open("/settings", "__self")}>
                            <ListItemIcon>
                                <Settings />
                            </ListItemIcon>
                            <ListItemText primary={"Settings"} />
                        </ListItem>
                        <ListItem button onClick={() => window.open("/finddonor", "__self")}>
                            <ListItemIcon>
                                <PersonSearch />
                            </ListItemIcon>
                            <ListItemText primary={"Find Donor"} />
                        </ListItem>
                        <ListItem button onClick={() => auth.signOut()}>
                            <ListItemIcon>
                                <Logout />
                            </ListItemIcon>
                            <ListItemText primary={"Logout"} />
                        </ListItem>
                    </List>
                ) : (
                    <List>
                        <ListItem button onClick={() => window.open('/login', "__self")}>
                            <ListItemIcon>
                                <AccountCircle />
                            </ListItemIcon>
                            <ListItemText primary={"Login"} />
                        </ListItem>
                        <ListItem button onClick={() => window.open('/register', "__self")}>
                            <ListItemIcon>
                                <HowToReg />
                            </ListItemIcon>
                            <ListItemText primary={"Register"} />
                        </ListItem>
                        <ListItem button onClick={() => window.open("/locationservice", "__self")}>
                            <ListItemIcon>
                                <GpsFixed />
                            </ListItemIcon>
                            <ListItemText primary={"Donors Around You"} />
                        </ListItem>
                        <ListItem button onClick={() => window.open("/locationservice", "__self")}>
                            <ListItemIcon>
                                <LocalHospital />
                            </ListItemIcon>
                            <ListItemText primary={"Hospitals Around You"} />
                        </ListItem>
                    </List>
                )
            }
            <Divider />
            <List>
                <ListItem button>
                    <ListItemIcon>
                        <ContactMail />
                    </ListItemIcon>
                    <ListItemText primary={"Contact Us"} />
                </ListItem>
                <ListItem button>
                    <ListItemIcon>
                        <Info />
                    </ListItemIcon>
                    <ListItemText primary={"About Blood Donation"} />
                </ListItem>
                <ListItem button>
                    <ListItemIcon>
                        <Policy />
                    </ListItemIcon>
                    <ListItemText primary={"Regulations"} />
                </ListItem>
            </List>
        </Box>
    );
    
    return (
        <div className="sidebar">
            {
                <React.Fragment key={"left"}>
                    <IconButton children={<MenuOpen style={{fontSize: '3vw'}} />} color="primary" onClick={toggleDrawer("left", true)} />
                    <Drawer anchor={"left"} open={sideBarState} onClose={toggleDrawer("left", false)}>
                        {list("left")}
                    </Drawer>
                </React.Fragment>
            }
        </div>
    )
}

export default SideBar
