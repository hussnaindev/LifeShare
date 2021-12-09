import {AccountCircle, MenuOpen} from '@material-ui/icons';
import MailIcon from '@mui/icons-material/Mail';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import {Box, Divider, Drawer, IconButton, List, ListItem, ListItemIcon, ListItemText} from '@mui/material';
import {makeStyles} from '@mui/styles';
import React, {useState} from 'react';

const useStyles = makeStyles(
    {
        icon: {
            height: "2.5vw",
            width: "2.5vw"
        }
    }
)

function SideBar({listItems}) {
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
            <List>
                {
                    listItems.map(
                        (text, index) => (
                            <ListItem button key={text}>
                                <ListItemIcon>
                                    {index === 0 ? <AccountCircle /> : <MailIcon />}
                                </ListItemIcon>
                                <ListItemText primary={text} />
                            </ListItem>
                        )
                    )
                }
            </List>
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
