import {AccountCircle, GpsFixed, HowToReg, LocalHospital, MenuOpen, Settings} from '@material-ui/icons';
import Logout from '@mui/icons-material/Logout';
import MailIcon from '@mui/icons-material/Mail';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import PersonSearch from '@mui/icons-material/PersonSearch';
import {Box, Divider, Drawer, IconButton, List, ListItem, ListItemIcon, ListItemText} from '@mui/material';
import {makeStyles} from '@mui/styles';
import React, {useState} from 'react';
import {auth} from '../../Firebase';

const useStyles = makeStyles(
    {
        icon: {
            height: "2.5vw",
            width: "2.5vw"
        }
    }
)

function SideBar({profile}) {
    const [sideBarState, setSideBarState] = useState(false);
    const sideBarStyle = useStyles();

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
                        <ListItem button>
                            <ListItemIcon>
                                <AccountCircle />
                            </ListItemIcon>
                            <ListItemText primary={profile} />
                        </ListItem>
                        <ListItem button>
                            <ListItemIcon>
                                <Settings />
                            </ListItemIcon>
                            <ListItemText primary={"Settings"} />
                        </ListItem>
                        <ListItem button>
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
                        <ListItem button onClick={() => window.open('/login', "__blank")}>
                            <ListItemIcon>
                                <AccountCircle />
                            </ListItemIcon>
                            <ListItemText primary={"Login"} />
                        </ListItem>
                        <ListItem button onClick={() => window.open('/register', "__blank")}>
                            <ListItemIcon>
                                <HowToReg />
                            </ListItemIcon>
                            <ListItemText primary={"Register"} />
                        </ListItem>
                        <ListItem button>
                            <ListItemIcon>
                                <GpsFixed />
                            </ListItemIcon>
                            <ListItemText primary={"Donors Around You"} />
                        </ListItem>
                        <ListItem button>
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
                {
                    ['Contact Us', 'About Blood Donation', 'Regulations'].map(
                        (text, index) => (
                            <ListItem button key={text}>
                                <ListItemIcon>
                                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                                </ListItemIcon>
                                <ListItemText primary={text} />
                            </ListItem>
                        )
                    )
                }
            </List>
        </Box>
    );
    
    return (
        <div className="sidebar">
            {
                <React.Fragment key={"left"}>
                    <IconButton children={<MenuOpen className={sideBarStyle.icon} />} color="primary" onClick={toggleDrawer("left", true)} />
                    <Drawer anchor={"left"} open={sideBarState} onClose={toggleDrawer("left", false)}>
                        {list("left")}
                    </Drawer>
                </React.Fragment>
            }
        </div>
    )
}

export default SideBar
