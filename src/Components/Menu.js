import * as React from 'react';
import SortIcon from '@mui/icons-material/Sort';
import { IconButton } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';

function Menu() {
    const useStyles = makeStyles(() => ({
        icon: {
            '& svg': {
                fontSize: "2.3rem",
                color: "white"
            },

        },
    }))
    const classes = useStyles();
    const [state, setState] = React.useState(false);
    const list = () => (
        <Box
            sx = {{width: 1}}
            role = "presentation"
            onClick = {setState(false)}

        >
            <List>
                <ListItem button>
                    <h1>Cow</h1>
                </ListItem>
            </List> 

        </Box>

    )
    return (
        <div>
            <IconButton className = {classes.icon} onClick = {() => {setState(true)}} >
                <SortIcon/>  
            </IconButton>
            <Drawer
            open = {state}
            onClose = {() => {setState(false)}}>
                {list}
            </Drawer>
        </div>
    )
}

export default Menu;