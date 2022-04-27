import * as React from 'react';
import SortIcon from '@mui/icons-material/Sort';
import { IconButton } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { Link as Scroll } from 'react-scroll';
import Divider from '@mui/material/Divider';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import CancelIcon from '@mui/icons-material/Cancel';
function Menu() {
    const useStyles = makeStyles(() => ({
        icon: {
            '& svg': {
                fontSize: "2.3rem",
                color: "white"
            },

        },
        menu: {
            width: "100vw",
            display: "flex",
            flexDirection: "column",
            
            alignItems: "center",
            background: '#FF9899',
            height: "100vh"
            
        },
        drawer: {


        },
        close: {
            alignSelf: "flex-end",
            '& svg': {
                fontSize: "4.2rem",
                color: "white",
                marginRight: "5vw",
                paddingTop: "7vh,"
            },
        },
        button: {
            "&.MuiButton-root": {
                border: "2px white solid",
                fontSize: "2vh",
                fontFamily: "Signika",
                color: "#fff",
                width: "30vw"

            },
        }
    }))
    const classes = useStyles();
    const [state, setState] = React.useState(false);
    return (
        <div >
            <IconButton className = {classes.icon} onClick = {() => {setState(true)}} >
                <SortIcon/>  
            </IconButton>
            <Drawer
            open = {state}
            onClose = {() => {setState(false)}}
           
            anchor = "right"
            className = {classes.drawer}>
                <Box className = {classes.menu}>

                <IconButton onClick = {() => {setState(false)}}
                className = {classes.close}>
                    <CancelIcon />
                </IconButton>
                <Grid container direction = "column" rowSpacing = {7}
                sx = {{
                    width: 250,
                    alignItems: "center",
                    mt: 6
                }}
                >
                    <Grid item sx = {{pt: 5}}>
                        <Scroll to = "aboutme" smooth = {true}>
                            <Button onClick = {() => {setState(false)}}
                            className = {classes.button}>About Me</Button>

                        </Scroll>
                    </Grid>
                    <Grid item>
                        <Scroll to = "projects" smooth = {true} offset = {-100}>

                            <Button onClick = {() => {setState(false)}}
                            className = {classes.button}>Projects</Button>

                        </Scroll>

                    </Grid>
                    <Grid item>
                        <Button onClick = {() => {setState(false)}}
                            className = {classes.button}>Resume</Button>
                    </Grid>
                    <Grid item>
                        <Scroll to = "contact-form" smooth = {true}>
                            <Button onClick = {() => {setState(false)}}
                            className = {classes.button}>Contact Me</Button>

                        </Scroll>
                    </Grid>
                    
                    
                </Grid>
                <br />
                <br />
                <Divider />
                <Grid container>
                    <Grid item >
                        <IconButton className = {classes.icon} aria-label="Github.com" onClick={() => window.open('https://github.com/jasonz23')}>
                            <GitHubIcon />
                        </IconButton>
                    </Grid>
                    <Grid item >
                        <IconButton className = {classes.icon} aria-label="Linkedin.com" onClick={() => window.open('https://www.linkedin.com/in/jason-zhao-24a5b8233/')}>
                            <LinkedInIcon />
                        </IconButton>
                    </Grid>
                </Grid>
                </Box>
            </Drawer>
        </div>
    )
}

export default Menu;